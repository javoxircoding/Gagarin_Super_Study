import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Languages, Calculator, Monitor, Clock, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const courses = [
  {
    title: "IELTS Preparation",
    description:
      "Comprehensive IELTS training covering all four skills: Reading, Writing, Listening, and Speaking. Achieve your target band score with proven strategies.",
    icon: Languages,
    badge: "Most Popular",
    features: ["Band 7+ guarantee", "Mock exams weekly", "1-on-1 speaking practice"],
    students: "800+",
    duration: "3 months",
  },
  {
    title: "Mathematics",
    description:
      "From algebra to calculus, build a strong mathematical foundation. Perfect for school exams, university entrance, and competitive tests.",
    icon: Calculator,
    badge: "Beginner Friendly",
    features: ["All levels covered", "Problem-solving focus", "Exam preparation"],
    students: "650+",
    duration: "4 months",
  },
  {
    title: "IT & Programming",
    description:
      "Learn modern web development, Python programming, and computer science fundamentals. Build real projects and launch your tech career.",
    icon: Monitor,
    badge: "Career Ready",
    features: ["Hands-on projects", "Industry mentors", "Job placement support"],
    students: "500+",
    duration: "6 months",
  },
];

export function CoursesSection() {
  return (
    <section id="courses" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Our Programs
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Courses Designed for Your Success
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Choose from our carefully crafted programs, each designed to deliver
            real results with expert guidance every step of the way.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card
              key={course.title}
              className="group relative overflow-hidden border-border bg-card transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <course.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/10"
                  >
                    {course.badge}
                  </Badge>
                </div>
                <CardTitle className="font-display text-xl font-bold text-foreground">
                  {course.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-5">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {course.description}
                </p>

                <ul className="flex flex-col gap-2">
                  {course.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-4 border-t border-border pt-4">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Users className="h-3.5 w-3.5" />
                    {course.students} students
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    {course.duration}
                  </div>
                </div>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
