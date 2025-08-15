import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'

export default function Pricing() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h1 className="text-center text-4xl font-semibold lg:text-5xl">All-in-One Exam Preparation for Everyone</h1>
<p>ALCHPREP helps you prepare for any exam with 100% selection-focused mock tests, global leaderboards, and detailed analytics—all completely free.</p>

                </div>

                <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-5 md:gap-0">
                    <div className="rounded-(--radius) flex flex-col justify-between space-y-8 border p-6 md:col-span-2 md:my-2 md:rounded-r-none md:border-r-0 lg:p-10">
                        <div className="space-y-4">
                            <div>
    <h2 className="font-medium">Other Platform</h2>
    <span className="my-3 block text-2xl font-semibold">$100+ / mo</span>
    <p className="text-muted-foreground text-sm">
        Limited exams, no global leaderboard, and minimal analytics. Not suitable for full exam preparation.
    </p>
</div>

<Button
    asChild
    variant="outline"
    className="w-full cursor-not-allowed opacity-50"
    disabled>
    <Link href="#">Get Started</Link>
</Button>


                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['Limited Mock Tests (10 per month)',
        'No Global Leaderboard',
        'Minimal Analytics Dashboard',
        'No Past Papers Access',
        'Limited Exam Coverage',
        'No Sharing with Friends',
        'Mobile Only Access',
        'No Daily Challenges',
        'Basic Support Only',
        'High Subscription Cost'].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="dark:bg-muted rounded-(--radius) border p-6 shadow-lg shadow-gray-950/5 md:col-span-3 lg:p-10 dark:[--color-muted:var(--color-zinc-900)]">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="space-y-4">
                                <div>
                                    <h2 className="font-medium">ALCHPREP</h2>
    <span className="my-3 block text-2xl font-semibold">₹0 / mo</span>
    <p className="text-muted-foreground text-sm">
        All-in-one exam prep platform with unlimited mock tests, analytics, and leaderboard access.
    </p>
                                </div>

                                <Button
                                    asChild
                                    className="w-full">
                                    <Link href="">Get Started</Link>
                                </Button>
                            </div>

                            <div>
                                <div className="text-sm font-medium">Everything in free plus :</div>

                                <ul className="mt-4 list-outside space-y-3 text-sm">
                                    {[
            'Unlimited Mock Tests for All Exams',
            'Global Leaderboard to Track Progress',
            'Detailed Analytics and Insights',
            'Practice Past Papers and Quizzes',
            'Share Prep with Friends and Loved Ones',
            'Daily Challenges to Improve Speed',
            'Mobile & Web Access',
            'Real-time Progress Tracking',
            '100% Selection Oriented Preparation',
            'Full Access to All Study Material'].map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-2">
                                            <Check className="size-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}