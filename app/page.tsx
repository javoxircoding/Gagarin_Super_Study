import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { CoursesSection } from "@/components/courses-section";
import { TeachersSection } from "@/components/teachers-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <CoursesSection />
        <TeachersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
