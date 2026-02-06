import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Activities from "@/components/Activities";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Activities />
      <ContactForm />
      <Footer />
    </main>
  );
}
