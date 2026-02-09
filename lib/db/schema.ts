import { pgTable, serial, text, varchar, integer, timestamp, jsonb } from 'drizzle-orm/pg-core';

export const contactMessages = pgTable('contact_messages', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  subject: varchar('subject', { length: 255 }).notNull(),
  message: text('message').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const membershipEnrollments = pgTable('membership_enrollments', {
  id: serial('id').primaryKey(),
  trackingId: varchar('tracking_id', { length: 20 }).unique().notNull(),
  familyHeadName: varchar('family_head_name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 20 }).notNull(),
  address: text('address').notNull(),
  membersCount: integer('members_count').notNull(),
  paymentStatus: varchar('payment_status', { length: 50 }).default('pending').notNull(),
  paymentId: varchar('payment_id', { length: 255 }),
  status: varchar('status', { length: 50 }).default('pending').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const volunteerApplications = pgTable('volunteer_applications', {
  id: serial('id').primaryKey(),
  fullName: varchar('full_name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 20 }).notNull(),
  state: varchar('state', { length: 100 }).notNull(),
  district: varchar('district', { length: 100 }).notNull(),
  skills: text('skills').notNull(),
  availability: varchar('availability', { length: 100 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
