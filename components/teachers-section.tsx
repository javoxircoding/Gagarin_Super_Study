import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const teachers = [
  {
    name: "Sarah Mitchell",
    role: "IELTS Instructor",
    bio: "CELTA-certified with 10+ years of IELTS teaching experience. Helped 500+ students achieve Band 7+.",
    image: "/images/teacher-1.jpg",
  },
  {
    name: "David Chen",
    role: "Mathematics Lead",
    bio: "PhD in Applied Mathematics. Specialist in making complex concepts accessible and engaging for all levels.",
    image: "/images/teacher-2.jpg",
  },
  {
    name: "Alex Rivera",
    role: "IT & Programming",
    bio: "Full-stack developer turned educator. Former engineer at top tech companies with a passion for teaching.",
    image: "/images/teacher-3.jpg",
  },
  {
    name: "Emma Watson",
    role: "IELTS Speaking Coach",
    bio: "Native English speaker with deep expertise in pronunciation coaching and conversational fluency.",
    image: "/images/teacher-4.jpg",
  },
];

export function TeachersSection() {
  return (
    <section id="teachers" className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Meet the Team
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Learn from the Best
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Our instructors combine deep subject expertise with a genuine passion
            for helping students succeed.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teachers.map((teacher) => (
            <Card
              key={teacher.name}
              className="group overflow-hidden border-border bg-background transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={teacher.image || "/placeholder.svg"}
                  alt={`Portrait of ${teacher.name}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-base font-bold text-foreground">
                      {teacher.name}
                    </h3>
                    <p className="text-sm font-medium text-primary">
                      {teacher.role}
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-label={`View ${teacher.name}'s LinkedIn profile`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Linkedin className="h-4 w-4" />
                  </button>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {teacher.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
