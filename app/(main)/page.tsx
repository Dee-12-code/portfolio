import Hero from './components/Hero';
import About from './components/About';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Experience from './components/Experience';
import ContactForm from './components/ContactForm';
import TechStack from './components/Techstack';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Certifications />
      <Projects />
      <Experience />
      <section id="contact" className=" relative py-20 bg-gray-50 dark:bg-gray-900 z-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Get In Touch
          </h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}