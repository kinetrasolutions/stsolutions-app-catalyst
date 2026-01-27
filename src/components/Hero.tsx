import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-64 md:w-96 h-64 md:h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "100px 100px"
        }} />
      </div>

      <div className="container-custom px-5 sm:px-6 lg:px-8 relative z-10 pt-24 pb-8 md:pb-0">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full glass-dark border border-primary/20 mb-6 md:mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm sm:text-base font-medium text-secondary-foreground">
            Automazioni AI per Attività Locali e Professionisti
          </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-secondary-foreground mb-5 md:mb-6 animate-slide-up leading-tight">
            <span className="text-gradient">Automatizziamo</span> i processi
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>della tua attività con l'AI
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-3 md:mb-4 animate-slide-up px-2" style={{ animationDelay: "0.1s" }}>
            Clienti, appuntamenti, comunicazioni e operazioni quotidiane automatizzate con soluzioni AI su misura, senza software standard.
          </p>

          {/* Micro-copy */}
          <p className="text-base sm:text-lg md:text-xl text-primary font-medium mb-8 md:mb-10 animate-slide-up" style={{ animationDelay: "0.15s" }}>
            L'AI lavora per te anche quando non sei operativo.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col justify-center items-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex flex-col items-center w-full px-4 sm:px-0">
              <Button variant="hero" size="xl" className="group w-full sm:w-auto" asChild>
                <a href="https://calendly.com/studio-stsolutions/30min" target="_blank" rel="noopener noreferrer">
                  Prenota una Chiamata Gratuita
                  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <span className="text-sm sm:text-base text-white/70 mt-2">Chiamata gratuita di 10 minuti – senza impegno</span>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 md:mt-16 pb-6 md:pb-8 grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 justify-center">
              <span className="text-2xl md:text-3xl font-bold text-primary">✓</span>
              <span className="text-sm sm:text-base text-white font-medium text-left">Riduzione<br />Costi Operativi</span>
            </div>
            <div className="w-px h-10 bg-white/30 hidden sm:block" />
            <div className="flex items-center gap-2 justify-center">
              <span className="text-2xl md:text-3xl font-bold text-primary">∞</span>
              <span className="text-sm sm:text-base text-white font-medium text-left">Tempo Liberato<br />Per Te</span>
            </div>
            <div className="w-px h-10 bg-white/30 hidden sm:block" />
            <div className="flex items-center gap-2 justify-center">
              <span className="text-2xl md:text-3xl font-bold text-primary">H24</span>
              <span className="text-sm sm:text-base text-white font-medium text-left">Assistente AI<br />Sempre Attivo</span>
            </div>
            <div className="w-px h-10 bg-white/30 hidden sm:block" />
            <div className="flex items-center gap-2 justify-center">
              <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-primary" strokeWidth={2.5} />
              <span className="text-sm sm:text-base text-white font-medium text-left">Incremento Fatturato<br />Senza Sforzi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;