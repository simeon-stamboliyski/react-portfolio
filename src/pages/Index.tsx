import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Projects />
      <ContactForm />
      
      <footer className="py-8 px-6 border-t border-border bg-background">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 John Doe. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
