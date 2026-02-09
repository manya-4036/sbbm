import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../lib/db';
import { volunteerApplications } from '../../../lib/db/schema';
import { volunteerFormSchema } from '../../../lib/validations';
import { ZodError } from 'zod';
import { sql } from 'drizzle-orm';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const validatedData = volunteerFormSchema.parse(body);

        const [volunteer] = await db.insert(volunteerApplications).values({
            fullName: validatedData.fullName,
            email: validatedData.email,
            phone: validatedData.phone,
            state: validatedData.state,
            district: validatedData.district,
            skills: validatedData.skills || null,
            availability: validatedData.availability || null,
        }).returning();

        return NextResponse.json({
            message: 'Volunteer application submitted successfully',
            applicationId: volunteer.id,
        }, { status: 200 });
    } catch (error) {
        if (error instanceof ZodError) {
            return NextResponse.json({ error: 'Validation failed', details: error.errors }, { status: 400 });
        }
        console.error('Volunteer API error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

export async function GET() {
    try {
        const result = await db.select({ count: sql<number>`count(*)` }).from(volunteerApplications);
        const count = Number(result[0]?.count || 0);
        return NextResponse.json({
            count,
            progress: (count / 100000) * 100,
        });
    } catch (error) {
        console.error('Volunteer stats API error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
