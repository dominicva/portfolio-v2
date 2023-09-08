import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Hello from './hello.mdx';

export default function Home() {
  return (
    <div className="bg-primary">
      <Hello />
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
