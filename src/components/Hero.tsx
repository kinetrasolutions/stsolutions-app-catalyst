import { ArrowRight, Play, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "100px 100px"
          }}
        />
      </div>

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10 pt-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-primary/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-secondary-foreground">
              Automazioni AI per Attività Locali e Professionisti
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-secondary-foreground mb-6 animate-slide-up">
            Smetti di{" "}
            <span className="text-gradient">sprecare tempo e soldi</span>
            <br />
            Automatizza con l'AI
          </h1>

          {/* Subheadline */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Automazioni intelligenti per aziende, attività locali e professionisti. 
            Riduci i costi operativi, elimina le attività ripetitive e concentrati sui tuoi clienti.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Button variant="hero" size="xl" className="group">
              Prenota una Call Gratuita
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="hero-outline" size="xl" className="group border-2 border-white/60 text-white hover:bg-white/10 hover:border-white">
              <Play size={18} className="mr-2" />
              Scopri Come Funziona
            </Button>
          </div>

          {/* Trust Badges */}
          <div 
            className="mt-16 pb-8 flex flex-wrap justify-center items-center gap-8 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-primary">✓</span>
              <span className="text-sm text-white font-medium text-left">Riduzione<br />Costi Operativi</span>
            </div>
            <div className="w-px h-10 bg-white/30 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-primary">∞</span>
              <span className="text-sm text-white font-medium text-left">Tempo Liberato<br />Per Te</span>
            </div>
            <div className="w-px h-10 bg-white/30 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-primary">H24</span>
              <span className="text-sm text-white font-medium text-left">Assistente AI<br />Sempre Attivo</span>
            </div>
            <div className="w-px h-10 bg-white/30 hidden sm:block" />
            <div className="flex items-center gap-2">
              <TrendingUp className="w-8 h-8 text-primary" strokeWidth={2.5} />
              <span className="text-sm text-white font-medium text-left">Incremento Fatturato<br />Senza Sforzi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
