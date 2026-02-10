import Link from "next/link";
import { GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <GraduationCap className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-display text-lg font-bold text-foreground">
                Gagarin<span className="text-primary"> Super Study</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Empowering students with expert-led courses in IELTS, Math, and
              IT since 2018.
            </p>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-display text-sm font-bold text-foreground">
              Courses
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <Link
                  href="#courses"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  IELTS Preparation
                </Link>
              </li>
              <li>
                <Link
                  href="#courses"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Mathematics
                </Link>
              </li>
              <li>
                <Link
                  href="#courses"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  IT & Programming
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-sm font-bold text-foreground">
              Company
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <Link
                  href="#teachers"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Our Teachers
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-sm font-bold text-foreground">
              Legal
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Gagarin Super Study. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
