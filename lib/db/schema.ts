import { pgTable, serial, varchar, text, timestamp, integer, decimal } from 'drizzle-orm/pg-core';

// Contact Messages Table
export const contactMessages = pgTable('contact_messages', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    email: varchar('email', { length: 255 }).notNull(),
    subject: varchar('subject', { length: 500 }).notNull(),
    message: text('message').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Membership Enrollments Table
export const membershipEnrollments = pgTable('membership_enrollments', {
    id: serial('id').primaryKey(),
    trackingId: varchar('tracking_id', { length: 20 }).notNull().unique(),
    familyHeadName: varchar('family_head_name', { length: 255 }).notNull(),
    email: varchar('email', { length: 255 }).notNull(),
    phone: varchar('phone', { length: 20 }).notNull(),
    address: text('address').notNull(),
    membersCount: integer('members_count').notNull(),
    paymentStatus: varchar('payment_status', { length: 50 }).default('pending').notNull(),
    paymentId: varchar('payment_id', { length: 255 }),
    amount: decimal('amount', { precision: 10, scale: 2 }).default('500.00').notNull(),
    status: varchar('status', { length: 50 }).default('pending').notNull(), // pending, approved, rejected
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Volunteer Applications Table
export const volunteerApplications = pgTable('volunteer_applications', {
    id: serial('id').primaryKey(),
    fullName: varchar('full_name', { length: 255 }).notNull(),
    email: varchar('email', { length: 255 }).notNull(),
    phone: varchar('phone', { length: 20 }).notNull(),
    state: varchar('state', { length: 100 }).notNull(),
    district: varchar('district', { length: 100 }).notNull(),
    skills: text('skills'),
    availability: varchar('availability', { length: 100 }),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});
