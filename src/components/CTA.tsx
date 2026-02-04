import { ArrowRight, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation";

const CTA = () => {
  return (
    <section id="contatti" className="section-padding bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-custom px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <ScrollAnimation variant="fadeUp">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 sm:mb-6">
              Inizia Ora
            </span>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Stanchi di{" "}
              <span className="text-gradient">gestire tutto manualmente</span>?
            </h2>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 px-2">
              Prenotate un appuntamento conoscitivo di 10 minuti, senza impegno. 
              Scopriamo insieme come automatizzare la vostra attività.
            </p>
          </ScrollAnimation>

          {/* CTA Buttons */}
          <ScrollAnimation variant="scale" delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4 sm:px-0">
              <Button variant="hero" size="xl" className="group w-full sm:w-auto" asChild>
                <a href="https://calendly.com/kinetrasolutions-proton/30min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 mr-2" />
                  Prenota una Chiamata Gratuita
                  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="hero" size="xl" className="group w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700" asChild>
                <a href="https://wa.me/393452838679?text=Buongiorno%20%2C%20sarei%20interessato%20alle%20vostre%20soluzioni%20per%20la%20mia%20attività" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Scrivici su WhatsApp
                  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </ScrollAnimation>

          {/* Trust indicators */}
          <StaggerContainer className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base text-muted-foreground" staggerDelay={0.1}>
            <StaggerItem>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                Risposta rapida
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                Analisi gratuita inclusa
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                Nessun impegno
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default CTA;
