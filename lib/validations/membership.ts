import { z } from 'zod';

export const membershipFormSchema = z.object({
  familyHeadName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Invalid phone number'),
  address: z.string().min(10, 'Address must be at least 10 characters'),
  membersCount: z.coerce.number().min(1, 'At least 1 member is required'),
});

export type MembershipFormData = z.infer<typeof membershipFormSchema>;
