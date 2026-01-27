import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs - hidden on mobile to prevent overflow */}
        <div className="hidden sm:block absolute top-1/4 -left-32 w-64 md:w-96 h-64 md:h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="hidden sm:block absolute bottom-1/4 -right-32 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "100px 100px"
        }} />
      </div>

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-8 md:pb-0">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full glass-dark border border-primary/20 mb-6 md:mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse flex-shrink-0" />
            <span className="text-xs sm:text-sm md:text-base font-medium text-secondary-foreground">
              Automazioni AI per Attività Locali
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-secondary-foreground mb-4 md:mb-6 animate-slide-up leading-[1.1] px-2">
            <span className="text-gradient">Automatizziamo</span>
            <br />
            <span>i processi della tua</span>
            <br />
            <span>attività con l'AI</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4 animate-slide-up px-4" style={{ animationDelay: "0.1s" }}>
            Clienti, appuntamenti, comunicazioni e operazioni automatizzate con soluzioni AI su misura.
          </p>

          {/* Micro-copy */}
          <p className="text-sm sm:text-base md:text-lg text-primary font-medium mb-6 md:mb-10 animate-slide-up px-4" style={{ animationDelay: "0.15s" }}>
            L'AI lavora per te anche quando non sei operativo.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col justify-center items-center animate-slide-up px-4" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl" className="group w-full sm:w-auto text-sm sm:text-base" asChild>
              <a href="https://calendly.com/studio-stsolutions/30min" target="_blank" rel="noopener noreferrer">
                Prenota una Chiamata Gratuita
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <span className="text-xs sm:text-sm text-white/70 mt-3">Chiamata gratuita di 10 minuti – senza impegno</span>
          </div>

          {/* Trust Badges */}
          <div className="mt-10 md:mt-16 pb-6 md:pb-8 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:justify-center sm:items-center sm:gap-6 md:gap-8 animate-fade-in px-2" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center sm:text-left">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">✓</span>
              <span className="text-xs sm:text-sm md:text-base text-white font-medium">Riduzione<br className="sm:hidden" /> Costi</span>
            </div>
            <div className="w-px h-10 bg-white/30 hidden sm:block" />
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center sm:text-left">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">∞</span>
              <span className="text-xs sm:text-sm md:text-base text-white font-medium">Tempo<br className="sm:hidden" /> Liberato</span>
            </div>
            <div className="w-px h-10 bg-white/30 hidden sm:block" />
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center sm:text-left">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">H24</span>
              <span className="text-xs sm:text-sm md:text-base text-white font-medium">Sempre<br className="sm:hidden" /> Attivo</span>
            </div>
            <div className="w-px h-10 bg-white/30 hidden sm:block" />
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center sm:text-left">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary" strokeWidth={2.5} />
              <span className="text-xs sm:text-sm md:text-base text-white font-medium">+Fatturato</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;