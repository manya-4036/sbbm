import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function isValidTrackingId(id: string) {
    return /^SBBM-\d{4}-\d{6}$/.test(id);
}
