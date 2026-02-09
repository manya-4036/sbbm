import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { membershipEnrollments } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { isValidTrackingId } from '@/lib/utils';

export async function GET(
  request: NextRequest,
  props: { params: Promise<{ trackingId: string }> }
) {
  try {
    const params = await props.params;
    const { trackingId } = params;

    if (!isValidTrackingId(trackingId)) {
      return NextResponse.json({ error: 'Invalid tracking ID format' }, { status: 400 });
    }

    const enrollment = await db.select().from(membershipEnrollments)
      .where(eq(membershipEnrollments.trackingId, trackingId)).limit(1);

    if (!enrollment?.length) {
      return NextResponse.json({ error: 'Tracking ID not found' }, { status: 404 });
    }

    const data = enrollment[0];
    return NextResponse.json({
      trackingId: data.trackingId,
      familyHeadName: data.familyHeadName,
      status: data.status,
      paymentStatus: data.paymentStatus,
      membersCount: data.membersCount,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    });
  } catch (error) {
    console.error('Track API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
