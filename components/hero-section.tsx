import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, BookOpen } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-card">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
        {/* Copy */}
        <div className="flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5">
            <Star className="h-4 w-4 text-primary" />
            <span className="text-xs font-semibold tracking-wide text-secondary-foreground">
              Trusted by 2,000+ students
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
            Launch Your Future with{" "}
            <span className="text-primary">Gagarin Super Study</span>
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
            Expert-led courses in IELTS, Mathematics, and IT designed to help
            you achieve your academic and career goals. Start with a free trial
            lesson today.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <Link href="#contact">
                Register for free lesson
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#courses">Explore courses</Link>
            </Button>
          </div>

          {/* Stats row */}
          <div className="mt-4 flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <p className="text-lg font-bold text-foreground">2,000+</p>
                <p className="text-xs text-muted-foreground">Students</p>
              </div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <div>
                <p className="text-lg font-bold text-foreground">50+</p>
                <p className="text-xs text-muted-foreground">Courses</p>
              </div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-primary" />
              <div>
                <p className="text-lg font-bold text-foreground">4.9</p>
                <p className="text-xs text-muted-foreground">Rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative hidden lg:block">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/images/hero-students.jpg"
              alt="Students learning together in a modern classroom"
              width={640}
              height={480}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          {/* Floating card */}
          <div className="absolute -bottom-4 -left-6 rounded-xl border border-border bg-card p-4 shadow-lg">
            <p className="text-xs font-medium text-muted-foreground">
              Next free lesson
            </p>
            <p className="font-display text-lg font-bold text-foreground">
              Tomorrow, 10:00 AM
            </p>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
    </section>
  );
}
