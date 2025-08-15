'use client';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { DynamicIcon } from 'lucide-react/dynamic';
import Link from 'next/link'

export default function FAQsThree() {
    const faqItems = [
        {
            id: 'item-1',
            icon: 'clock',
            question: 'Which exams are covered on ALCHPREP?',
            answer: 'ALCHPREP provides preparation for hundreds of exams across multiple countries, including competitive, academic, and professional exams.',
        },
        {
            id: 'item-2',
            icon: 'credit-card',
            question: 'Is ALCHPREP free to use?',
            answer: 'Yes! ALCHPREP is completely free, giving you access to unlimited mock tests, analytics, and leaderboard features to track your progress.',
        },
        {
            id: 'item-3',
            icon: 'globe',
            question: 'Can I compete on a global leaderboard?',
            answer: 'Absolutely! You can see how you rank against other students globally and analyze your performance to improve faster.',
        },
        {
            id: 'item-4',
            icon: 'users',
            question: 'Can I share my progress with friends or family?',
            answer: 'Yes! You can share your prep progress with loved ones to help them achieve their goals and compete together.',
        },
        {
            id: 'item-5',
            icon: 'activity',
            question: 'How does ALCHPREP help improve my scores?',
            answer: 'ALCHPREP provides analytics, daily challenges, practice quizzes, and detailed insights to help you identify weak areas and improve faster.',
        },
    ]

    return (
        <section className="bg-muted dark:bg-background py-20">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <div className="md:w-1/3">
                        <div className="sticky top-20">
                            <h2 className="mt-4 text-3xl font-bold">Frequently Asked Questions</h2>
                            <p className="text-muted-foreground mt-4">
                                Can't find what you're looking for? Contact our{' '}
                                <Link href="#" className="text-primary font-medium hover:underline">
                                    support team
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <Accordion type="single" collapsible className="w-full space-y-2">
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className="bg-background shadow-xs rounded-lg border px-4 last:border-b">
                                    <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-6">
                                                <DynamicIcon name={item.icon} className="m-auto size-4" />
                                            </div>
                                            <span className="text-base">{item.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-5">
                                        <div className="px-9">
                                            <p className="text-base">{item.answer}</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
}
