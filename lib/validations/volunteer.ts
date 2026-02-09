import { z } from 'zod';

export const volunteerFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Invalid phone number'),
  state: z.string().min(1, 'State is required'),
  district: z.string().min(1, 'District is required'),
  skills: z.string().min(1, 'Please list your skills'),
  availability: z.string().min(1, 'Availability is required'),
});

export type VolunteerFormData = z.infer<typeof volunteerFormSchema>;
