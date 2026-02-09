import { NextRequest, NextResponse } from 'next/server';
import { db, generateTrackingId } from '@/lib/db';
import { membershipEnrollments } from '@/lib/db/schema';
import { membershipFormSchema } from '@/lib/validations/membership';
import { ZodError } from 'zod';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = membershipFormSchema.parse(body);
    const trackingId = generateTrackingId();

    const [enrollment] = await db.insert(membershipEnrollments).values({
      trackingId,
      familyHeadName: validatedData.familyHeadName,
      email: validatedData.email,
      phone: validatedData.phone,
      address: validatedData.address,
      membersCount: validatedData.membersCount,
      paymentStatus: 'success', 
      paymentId: `PAY-${Date.now()}`,
      status: 'pending',
    }).returning();

    return NextResponse.json({
      message: 'Membership enrollment successful',
      trackingId,
      enrollmentId: enrollment.id,
    }, { status: 200 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error: 'Validation failed', details: error.issues }, { status: 400 });
    }
    console.error('Membership API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
