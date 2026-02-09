import { z } from 'zod';

export const contactFormSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    subject: z.string().min(5, 'Subject must be at least 5 characters'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const membershipFormSchema = z.object({
    familyHeadName: z.string().min(2, 'Name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().regex(/^\d{10}$/, 'Invalid phone number'),
    address: z.string().min(10, 'Address is too short'),
    membersCount: z.number().min(1, 'At least 1 member required').max(20, 'Max 20 members allowed'),
});

export type MembershipFormData = z.infer<typeof membershipFormSchema>;

export const volunteerFormSchema = z.object({
    fullName: z.string().min(2, 'Name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().regex(/^\d{10}$/, 'Invalid phone number'),
    state: z.string().min(2, 'State is required'),
    district: z.string().min(2, 'District is required'),
    skills: z.string().optional(),
    availability: z.string().optional(),
});

export type VolunteerFormData = z.infer<typeof volunteerFormSchema>;
