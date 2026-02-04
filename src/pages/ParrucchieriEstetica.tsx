import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBar from "@/components/CookieBar";
import FoundersSection from "@/components/FoundersSection";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation";
import { Phone, CalendarX, UserMinus, TrendingDown, Bot, ShieldCheck, Megaphone, ArrowRight, Check, X, Shield, Zap, Database, MessageSquare, CheckCircle2, Clock, Scissors, type LucideIcon } from "lucide-react";
// Custom images for Parrucchieri/Estetica page
import parrucchieriHeroImage from "@/assets/parrucchieri-hero.webp";
import parrucchieriWhatsapp from "@/assets/parrucchieri-whatsapp.webp";
import parrucchieriNoshowCustom from "@/assets/parrucchieri-noshow-custom.webp";
import parrucchieriMarketing from "@/assets/parrucchieri-marketing.webp";

const challenges = [{
  icon: Phone,
  title: "Mani impegnate, chiamate perse",
  description: "Mentre lavori non puoi rispondere: ogni squillo è un cliente che va altrove.",
  problems: ["Interruzioni durante i trattamenti", "Chiamate perse = agenda vuota", "Impossibile rispondere con mani occupate"]
}, {
  icon: CalendarX,
  title: "Il costo dei buchi in agenda",
  description: "Un appuntamento saltato è un'ora persa per sempre. Ogni slot vuoto costa soldi.",
  problems: ["No-show del 15-25%", "Cancellazioni last-minute", "Mancato guadagno irrecuperabile"]
}, {
  icon: UserMinus,
  title: "Clienti che non tornano",
  description: "Senza richiami costanti, il cliente si dimentica. Devi richiamare manualmente.",
  problems: ["Clienti che scompaiono", "Nessun richiamo automatico", "Tempo sprecato a rincorrere"]
}, {
  icon: TrendingDown,
  title: "Scontrino medio basso",
  description: "Difficoltà nell'upselling. Opportunità perse per trattamenti aggiuntivi.",
  problems: ["Solo servizio base venduto", "Nessun suggerimento", "Potenziale inespresso"]
}];

const solutions = [{
  icon: Bot,
  title: "Receptionist AI h24",
  subtitle: "Tu lavori. L'AI riempie l'agenda.",
  description: "Gestisce prenotazioni su WhatsApp in tempo reale, senza distrazioni. Non perdi più clienti.",
  features: ["Risponde h24 in 30 secondi – Mai più clienti persi", "Disponibilità real-time – Prenota in autonomia", "Gestisce liste d'attesa – Slot liberi assegnati subito", "Zero distrazioni – Niente più corse al telefono"],
  highlight: "Tu lavori. L'AI riempie l'agenda.",
  color: "from-pink-500 to-rose-500"
}, {
  icon: ShieldCheck,
  title: "Recupero No-Show",
  subtitle: "Ogni appuntamento diventa incasso",
  description: "L'AI gestisce promemoria, filtra clienti inaffidabili e riempie i buchi in agenda.",
  features: ["Reminder anti-dimenticanza – Notifiche 48h, 24h, 2h", "Conferma istantanea – Click per confermare", "Gestione last-minute – Lista d'attesa automatica", "Blocco no-show seriali – Protezione margini"],
  highlight: "Zero buchi, 100% produttività.",
  color: "from-violet-500 to-purple-500"
}, {
  icon: Megaphone,
  title: "Marketing Automatico",
  subtitle: "Frequenza +40%. Scontrino +25%.",
  description: "Messaggi personalizzati al momento giusto. Richiami, upselling, recupero clienti.",
  features: ["Richiami personalizzati – Quando è ora del prossimo taglio", "Upselling intelligente – Suggerimenti mirati", "Recupero dormienti – Campagne automatiche", "Offerte mirate – Promozioni che convertono"],
  highlight: "Frequenza +40%. Scontrino +25%.",
  color: "from-amber-500 to-orange-500"
}];

const benefits = [{
  icon: Database,
  title: "Database Proprietario",
  subtitle: "Zero commissioni",
  description: "I tuoi clienti restano tuoi. Storico completo per marketing efficace.",
  points: ["Database completo", "Zero piattaforme esterne", "Marketing diretto"]
}, {
  icon: Zap,
  title: "Automazione Totale",
  subtitle: "10+ ore risparmiate/sett",
  description: "L'AI lavora per te. Prenotazioni, promemoria, richiami in autopilota.",
  points: ["Risposta h24", "Zero interruzioni", "Meno stress"]
}, {
  icon: Shield,
  title: "Aumento Valore Cliente",
  subtitle: "+20-30% scontrino",
  description: "Suggerimenti intelligenti e upselling automatico. Trattamento giusto al momento giusto.",
  points: ["Suggerimenti personalizzati", "Upselling automatico", "Fidelizzazione"]
}];

const results: { metric: string; before: string; after: string; icon: LucideIcon }[] = [{
  metric: "No-show",
  before: "20-25%",
  after: "< 5%",
  icon: CalendarX
}, {
  metric: "Gestione",
  before: "12-18h/sett",
  after: "< 2h/sett",
  icon: Clock
}, {
  metric: "Risposta",
  before: "40-60%",
  after: "100%",
  icon: Phone
}, {
  metric: "Occupazione",
  before: "70-75%",
  after: "90-95%",
  icon: Scissors
}];

const processSteps = [{
  step: 1,
  title: "Contatto",
  description: "Chiamata o WhatsApp"
}, {
  step: 2,
  title: "Analisi",
  description: "Studio dei flussi"
}, {
  step: 3,
  title: "Proposta",
  description: "Soluzione su misura"
}, {
  step: 4,
  title: "Sviluppo",
  description: "Test insieme a te"
}, {
  step: 5,
  title: "Attivazione",
  description: "Formazione staff"
}, {
  step: 6,
  title: "Supporto",
  description: "Assistenza continua"
}];

const ParrucchieriEstetica = () => {
  const whatsappLink = "https://wa.me/393452838679?text=Buongiorno%2C%20sarei%20interessato%20alle%20vostre%20soluzioni%20per%20il%20mio%20salone";
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEOHead
        title="Automazioni AI per Parrucchieri e Centri Estetici | Kinetra Solutions"
        description="Prenotazioni automatiche h24, recupero no-show e marketing automatico per saloni di bellezza. Agenda sempre piena, zero stress. Scopri le nostre soluzioni."
        canonical="/parrucchieri-estetica"
        keywords="automazioni parrucchieri, prenotazioni automatiche salone, chatbot WhatsApp estetista, gestione appuntamenti bellezza, riduzione no-show parrucchiere, marketing automatico, Kinetra Solutions"
      />
      <Header />
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-pink-50/30 to-rose-50/50">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-pink-200/50 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-48 md:w-80 h-48 md:h-80 bg-amber-200/40 rounded-full blur-3xl animate-float" />
          </div>

          <div className="container-custom px-4 sm:px-6 relative z-10 pt-20 pb-12">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
              <div className="text-center lg:text-left">
                <span className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-xs sm:text-sm font-medium mb-4 border border-pink-200">
                  L'AI al servizio del tuo Salone
                </span>
                
                <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  L'AI che rivoluziona{" "}
                  <span className="text-pink-500">la gestione</span> e i{" "}
                  <span className="text-pink-500">trattamenti</span>
                </h1>
                
                <div className="text-sm sm:text-base text-gray-600 mb-4 space-y-2">
                  {["Prenotazioni h24, agenda intelligente", "Richiami automatici e recupero no-show", "Trasforma il tempo in pura arte"].map((text, i) => (
                    <p key={i} className="flex items-center gap-2 justify-center lg:justify-start">
                      <span className="w-5 h-5 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-[0_0_8px_rgba(236,72,153,0.5)]">
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </span>
                      {text}
                    </p>
                  ))}
                  <p className="mt-3 text-gray-500 text-xs sm:text-sm">
                    Sistema proprietario per gestire appuntamenti e clienti h24.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mt-6">
                  <Button size="lg" className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 hover:from-pink-600 hover:via-rose-600 hover:to-amber-600 text-white text-sm group">
                    Chiamata Gratuita
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 text-white text-sm" asChild>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/40 via-rose-500/30 to-transparent blur-3xl scale-105 animate-pulse-slow" />
                <div className="relative max-w-sm mx-auto" style={{
                  maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'
                }}>
                  <img src={parrucchieriHeroImage} alt="Salone AI" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 bg-background">
          <div className="container-custom">
            <ScrollAnimation variant="fadeUp" className="text-center mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-medium mb-3">
                Problemi Quotidiani
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                Le sfide che affronti ogni giorno
              </h2>
            </ScrollAnimation>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {challenges.map((challenge, index) => (
                <StaggerItem key={index}>
                  <div className="h-full rounded-xl border border-border bg-card p-4 hover:shadow-lg hover:border-destructive/30 transition-all">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                        <challenge.icon className="w-4 h-4 text-destructive" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-display text-sm sm:text-base font-bold text-foreground mb-1">
                          {challenge.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mb-2">
                          {challenge.description}
                        </p>
                        <div className="space-y-1">
                          {challenge.problems.map((problem, idx) => (
                            <div key={idx} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <X className="w-3 h-3 text-destructive shrink-0" />
                              <span className="truncate">{problem}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="soluzioni" className="py-12 md:py-16 px-4 sm:px-6 bg-gradient-to-b from-pink-50/30 to-white">
          <div className="container-custom">
            <ScrollAnimation variant="fadeUp" className="text-center mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-xs font-medium mb-3 border border-pink-200">
                Le Nostre Soluzioni
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                Dallo stress all'agenda sempre piena
              </h2>
            </ScrollAnimation>

            <div className="space-y-4">
              {solutions.map((solution, index) => {
                const solutionImages = [parrucchieriWhatsapp, parrucchieriNoshowCustom, parrucchieriMarketing];
                return (
                  <ScrollAnimation key={index} variant="fadeUp">
                    <div className="rounded-xl border border-border bg-card overflow-hidden">
                      <div className={`h-1 bg-gradient-to-r ${solution.color}`} />
                      <div className="p-4 sm:p-5">
                        <div className="flex items-start gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${solution.color} flex items-center justify-center shrink-0`}>
                            <solution.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-display text-base sm:text-lg font-bold text-foreground">
                              {solution.title}
                            </h3>
                            <p className="text-xs text-pink-500 font-medium">{solution.subtitle}</p>
                          </div>
                        </div>
                        
                        <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                          {solution.description}
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                          {solution.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <CheckCircle2 className="w-3.5 h-3.5 text-pink-500 shrink-0 mt-0.5" />
                              <span>{feature.split(" – ")[0]}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className={`inline-block px-3 py-1.5 rounded-full bg-gradient-to-r ${solution.color} text-white text-xs font-medium`}>
                          {solution.highlight}
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 bg-background">
          <div className="container-custom">
            <ScrollAnimation variant="fadeUp" className="text-center mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-xs font-medium mb-3 border border-pink-200">
                I Vantaggi
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                Perché scegliere Kinetra Solutions
              </h2>
            </ScrollAnimation>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {benefits.map((benefit, index) => (
                <StaggerItem key={index}>
                  <div className="h-full rounded-xl border border-border bg-card p-4 text-center">
                    <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center mx-auto mb-3">
                      <benefit.icon className="w-5 h-5 text-pink-500" />
                    </div>
                    <h3 className="font-display text-sm font-bold text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-pink-500 font-medium mb-2">{benefit.subtitle}</p>
                    <p className="text-xs text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 bg-pink-50/30">
          <div className="container-custom">
            <ScrollAnimation variant="fadeUp" className="text-center mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-xs font-medium mb-3 border border-pink-200">
                Risultati Concreti
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                Prima vs Dopo
              </h2>
            </ScrollAnimation>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {results.map((result, index) => (
                <ScrollAnimation key={index} variant="fadeUp" delay={index * 0.1}>
                  <div className="rounded-xl border border-border bg-card p-3 text-center">
                    <result.icon className="w-5 h-5 text-pink-500 mx-auto mb-2" />
                    <p className="text-xs font-medium text-foreground mb-2">{result.metric}</p>
                    <div className="flex items-center justify-center gap-1 text-xs">
                      <span className="text-destructive font-medium">{result.before}</span>
                      <ArrowRight className="w-3 h-3 text-muted-foreground" />
                      <span className="text-pink-500 font-bold">{result.after}</span>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 px-4 sm:px-6 bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white">
          <div className="container-custom text-center">
            <ScrollAnimation variant="fadeUp">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-3">
                Pronto a rivoluzionare il tuo salone?
              </h2>
              <p className="text-sm text-white/80 mb-6 max-w-lg mx-auto">
                Chiamata gratuita di 10 minuti – senza impegno
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" className="bg-white text-pink-600 hover:bg-white/90 text-sm group">
                  Prenota Chiamata
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white text-sm" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    WhatsApp
                  </a>
                </Button>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs text-white/70">
                <span className="flex items-center gap-1"><Check className="w-3 h-3" /> Zero impegno</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3" /> Analisi gratuita</span>
                <span className="flex items-center gap-1"><Check className="w-3 h-3" /> Risposta rapida</span>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Process Section */}
        <section id="come-funziona" className="py-12 md:py-16 px-4 sm:px-6 bg-background">
          <div className="container-custom">
            <ScrollAnimation variant="fadeUp" className="text-center mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-xs font-medium mb-3 border border-pink-200">
                Come Funziona
              </span>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                Il nostro processo
              </h2>
            </ScrollAnimation>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {processSteps.map((step, index) => (
                <ScrollAnimation key={index} variant="fadeUp" delay={index * 0.05}>
                  <div className="text-center p-3 rounded-xl border border-border bg-card">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-xs font-bold text-foreground mb-1">{step.title}</h3>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <FoundersSection accentColor="pink" />

        {/* Final CTA */}
        <section className="py-12 md:py-16 px-4 sm:px-6 bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white">
          <div className="container-custom text-center">
            <ScrollAnimation variant="fadeUp">
              <h2 className="font-display text-xl sm:text-2xl font-bold mb-3">
                Inizia oggi
              </h2>
              <p className="text-sm text-white/80 mb-6">
                10 minuti per scoprire come possiamo aiutarti
              </p>
              <Button size="lg" className="bg-white text-pink-600 hover:bg-white/90 text-sm group">
                Prenota Chiamata Gratuita
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </ScrollAnimation>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBar />
    </div>
  );
};

export default ParrucchieriEstetica;
