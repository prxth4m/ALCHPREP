import { Cpu, Zap } from 'lucide-react';
import Image from 'next/image';

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          ALCHPREP empowers students to ace every exam.
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative space-y-4">
            <p className="text-muted-foreground">
              ALCHPREP is more than just a test platform.{" "}
              <span className="text-accent-foreground font-bold">
                It provides comprehensive mock tests, interviews, and learning resources
              </span>{" "}
              — helping students prepare effectively for exams worldwide.
            </p>
            <p className="text-muted-foreground">
              From practice tests to real-time performance analytics, ALCHPREP ensures students stay ahead and track their progress efficiently.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Zap className="size-4" />
                  <h3 className="text-sm font-medium">Fast & Efficient</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Quickly attempt mock tests and get instant feedback to improve learning.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Cpu className="size-4" />
                  <h3 className="text-sm font-medium">Powerful Analytics</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  Track your performance, identify strengths and weaknesses, and optimize your preparation.
                </p>
              </div>
            </div>
          </div>

          <div className="relative mt-6 sm:mt-0">
            <div className="bg-linear-to-b aspect-67/34 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="/alchprep-dark.png"
                className="hidden rounded-[15px] dark:block"
                alt="ALCHPREP dark mode illustration"
                width={1206}
                height={612}
              />
              <Image
                src="/alchprep.png"
                className="rounded-[15px] shadow dark:hidden"
                alt="ALCHPREP light mode illustration"
                width={1206}
                height={612}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
