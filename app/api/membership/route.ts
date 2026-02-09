import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../lib/db';
import { membershipEnrollments } from '../../../lib/db/schema';
import { membershipFormSchema } from '../../../lib/validations';
import { ZodError } from 'zod';

function generateTrackingId() {
    const year = new Date().getFullYear();
    const random = Math.floor(100000 + Math.random() * 900000);
    return `SBBM-${year}-${random}`;
}

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
            return NextResponse.json({ error: 'Validation failed', details: error.errors }, { status: 400 });
        }
        console.error('Membership API error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
