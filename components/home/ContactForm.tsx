'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { contactFormSchema, type ContactFormData } from '../../lib/validations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error('Failed to send message');

            toast.success('Message sent successfully!', {
                description: "We'll get back to you shortly.",
                icon: <CheckCircle className="text-green-500 h-5 w-5" />,
            });
            reset();
        } catch (error) {
            toast.error('Something went wrong', {
                description: 'Please try again later.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-24 bg-midnight relative text-white">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <div className="lg:w-1/2">
                        <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">Get in Touch</h2>
                        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                            Have questions about the mission? Want to partner with us? Fill out the form and our team will respond within 24 hours.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                    <span className="text-2xl">📍</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Headquarters</h4>
                                    <p className="text-slate-400">New Delhi, India</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                    <span className="text-2xl">📧</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Email Us</h4>
                                    <p className="text-slate-400">contact@sbbm.org.in</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="glass-card-dark p-8 md:p-10"
                        >
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">Full Name</label>
                                        <Input {...register('name')} placeholder="John Doe" className="bg-white/5 border-white/10 text-white placeholder:text-slate-500" />
                                        {errors.name && <p className="text-red-400 text-xs">{errors.name.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-300">Email Address</label>
                                        <Input {...register('email')} placeholder="john@example.com" className="bg-white/5 border-white/10 text-white placeholder:text-slate-500" />
                                        {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Subject</label>
                                    <Input {...register('subject')} placeholder="How can I help?" className="bg-white/5 border-white/10 text-white placeholder:text-slate-500" />
                                    {errors.subject && <p className="text-red-400 text-xs">{errors.subject.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Message</label>
                                    <textarea
                                        {...register('message')}
                                        rows={4}
                                        className="flex w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Tell us more..."
                                    />
                                    {errors.message && <p className="text-red-400 text-xs">{errors.message.message}</p>}
                                </div>

                                <Button type="submit" disabled={isSubmitting} className="w-full btn-gradient-saffron h-12 text-base">
                                    {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
