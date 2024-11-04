// app/page.tsx
import Header from "./components/Header";
import Hero from "./components/Hero";
import CommunitySection from "./components/CommunitySection";
import FeaturesGrid from "./components/FeatureGrid";
import TestimonialsSection from "./components/TestimonialSection";
import SubscribeForm from "./components/SubscribeForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <section id="hero" className="pt-24 md:pt-30">
        <Hero
          title="Bienvenido a nuestra empresa"
          subtitle="Imagina las posibilidades con nuestra plataforma"
          buttonText="Ver mas"
        />
      </section>
      <section id="community">
        <CommunitySection
          title="Únete a nuestra comunidad"
          description="Conoce a otros usuarios y comparte tus experiencias"
          imageSrc="/images/comunidad.png"
        />
      </section>
      <section id="features">
        <FeaturesGrid />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="contact">
        <SubscribeForm />
        <Footer />
      </section>
    </div>
  );
}
