"use client";

import React from "react"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Left info */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Get in Touch
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Start Your Learning Journey
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Register for a free trial lesson or ask us anything. We are here
                to help you take the next step toward your goals.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Visit Us
                  </p>
                  <p className="text-sm text-muted-foreground">
                    123 Education Street, Learning District
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Call Us
                  </p>
                  <p className="text-sm text-muted-foreground">
                    +998 90 123 45 67
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Email Us
                  </p>
                  <p className="text-sm text-muted-foreground">
                    info@gagarinstudy.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Thank you!
                </h3>
                <p className="max-w-sm text-muted-foreground">
                  We received your registration. Our team will contact you
                  shortly to schedule your free lesson.
                </p>
                <Button
                  variant="outline"
                  className="mt-2 bg-transparent"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="font-display text-xl font-bold text-foreground">
                  Register for a Free Lesson
                </h3>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="firstName" className="text-foreground">
                      First name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="lastName" className="text-foreground">
                      Last name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="bg-background"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone" className="text-foreground">
                    Phone number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+998 90 123 45 67"
                    className="bg-background"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="course" className="text-foreground">
                    Interested course
                  </Label>
                  <Select>
                    <SelectTrigger id="course" className="bg-background">
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ielts">
                        IELTS Preparation
                      </SelectItem>
                      <SelectItem value="math">Mathematics</SelectItem>
                      <SelectItem value="it">
                        {"IT & Programming"}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="message" className="text-foreground">
                    Message (optional)
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your goals..."
                    rows={3}
                    className="resize-none bg-background"
                  />
                </div>

                <Button type="submit" size="lg" className="mt-2 w-full">
                  Register for free lesson
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  By submitting this form, you agree to our terms and privacy
                  policy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
