import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-20 px-6 gradient-subtle"
    >
      <div className="container mx-auto max-w-4xl text-center animate-fade-in">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent blur-2xl opacity-50"></div>
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
              alt="Avatar"
              className="relative w-32 h-32 rounded-full border-4 border-primary/20 shadow-glow"
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
          Hi, I'm John Doe
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/70 mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Full Stack Developer & Creative Problem Solver
        </p>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          I craft beautiful, functional web experiences with modern technologies.
          Passionate about clean code, elegant design, and building products that make a difference.
        </p>
        
        <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-smooth"
          >
            View My Work
          </Button>
          <Button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            size="lg"
            variant="outline"
            className="border-primary/50 hover:bg-primary/10 transition-smooth"
          >
            Get In Touch
          </Button>
        </div>
        
        <div className="mt-16 animate-bounce">
          <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
