import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <ContactForm />
      <Footer />
    </div>
  );
}
