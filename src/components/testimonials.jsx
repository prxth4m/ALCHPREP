import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Testimonials() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
                {/* Heading */}
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-4xl font-medium lg:text-5xl">
                        Trusted by aspirants, loved by achievers
                    </h2>
                    <p>
                        ALCHPREP helps students across the globe prepare for any exam, track their leaderboard ranking, and achieve 100% selection success.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">

                    {/* Large Testimonial */}
                    <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
                       <CardHeader className="flex items-center gap-2">
    <img
        className="h-6 w-auto"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpiQo54qY-X3uNEkfAppZLjKxlXw6bpcAhQw&s"
        alt="Harvard Logo"
        height="24"
        width="auto"
    />
    <span className="text-sm font-medium">Harvard</span>
</CardHeader>

                        <CardContent>
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">
                                    ALCHPREP has completely transformed my exam preparation. The mock tests, progress tracking, and personalized insights helped me secure a top rank on the global leaderboard!
                                </p>
                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://randomuser.me/api/portraits/men/32.jpg"
                                            alt="Rohan Mehta"
                                            height="400"
                                            width="400"
                                            loading="lazy" />
                                        <AvatarFallback>RM</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Rohan Mehta</cite>
                                        <span className="text-muted-foreground block text-sm">Engineering Aspirant</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>

                    {/* Other Testimonials */}
                    <Card className="md:col-span-2">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">
                                    The leaderboard feature motivates me every day! Seeing my global rank helped me focus and improve where I needed the most.
                                </p>
                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://randomuser.me/api/portraits/women/44.jpg"
                                            alt="Ananya Sharma"
                                            height="400"
                                            width="400"
                                            loading="lazy" />
                                        <AvatarFallback>AS</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Ananya Sharma</cite>
                                        <span className="text-muted-foreground block text-sm">Medical Aspirant</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>
                                    Thanks to ALCHPREP, I could practice for multiple exams on a single platform. The guided mock tests made preparation extremely convenient.
                                </p>
                                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://randomuser.me/api/portraits/men/65.jpg"
                                            alt="Vikram Singh"
                                            height="400"
                                            width="400"
                                            loading="lazy" />
                                        <AvatarFallback>VS</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Vikram Singh</cite>
                                        <span className="text-muted-foreground block text-sm">Competitive Exam Aspirant</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>

                    <Card className="card variant-mixed">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>
                                    Sharing ALCHPREP with my friends helped them achieve their goals too. It's great to have a platform that benefits everyone aiming for success.
                                </p>
                                <div className="grid grid-cols-[auto_1fr] gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://randomuser.me/api/portraits/women/22.jpg"
                                            alt="Priya Reddy"
                                            height="400"
                                            width="400"
                                            loading="lazy" />
                                        <AvatarFallback>PR</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium">Priya Reddy</p>
                                        <span className="text-muted-foreground block text-sm">Exam Enthusiast</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
