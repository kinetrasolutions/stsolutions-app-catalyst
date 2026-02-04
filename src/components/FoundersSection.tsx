import { Quote, CheckCircle2, ExternalLink, Sparkles, Award, Users, TrendingUp } from "lucide-react";
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation";

interface FoundersSectionProps {
  accentColor?: "primary" | "pink" | "orange" | "blue";
}

const differentiators = [
  {
    title: "Costruito su misura, non adattato",
    description: "Non vi vendiamo un software standard. Studiamo come lavorate oggi, individuiamo i colli di bottiglia, costruiamo la soluzione che si integra perfettamente.",
  },
  {
    title: "Persone reali, non call center",
    description: "Quando ci contattate, parlate direttamente con noi. Noi analizziamo il problema, noi progettiamo la soluzione, noi vi seguiamo nell'implementazione.",
  },
  {
    title: "Focus sui risultati misurabili",
    description: "Non vi vendiamo 'innovazione'. Vi vendiamo ore risparmiate, costi ridotti, clienti non persi. Numeri concreti che si vedono sul conto corrente.",
  },
];

const targetPoints = [
  { 
    title: "Il lavoro gestionale vi ruba tempo", 
    desc: "Ore perse al telefono invece di produrre valore." 
  },
  { 
    title: "Perdete clienti per risposte lente", 
    desc: "Non riuscite a rispondere in tempo reale." 
  },
  { 
    title: "Pagate troppe commissioni", 
    desc: "Il 20-30% va alle piattaforme esterne." 
  },
  { 
    title: "Il software standard non basta", 
    desc: "Nessuna soluzione si adatta al vostro business." 
  },
];

const getColorClasses = (color: FoundersSectionProps["accentColor"]) => {
  switch (color) {
    case "pink":
      return {
        badge: "bg-pink-100 text-pink-600 border-pink-200",
        border: "border-pink-500",
        icon: "text-pink-500",
        bgLight: "bg-pink-50/30",
        iconBg: "bg-pink-50/30",
        hover: "hover:border-pink-300",
        gradient: "from-pink-500 via-rose-500 to-amber-500",
        text: "text-pink-500",
        cardBg: "from-pink-500/10 to-rose-500/5",
        ringColor: "ring-pink-500/20",
      };
    case "orange":
      return {
        badge: "bg-orange-100 text-orange-600 border-orange-200",
        border: "border-orange-500",
        icon: "text-orange-500",
        bgLight: "bg-orange-50/30",
        iconBg: "bg-muted/50",
        hover: "hover:border-orange-300",
        gradient: "from-orange-500 via-amber-500 to-yellow-500",
        text: "text-orange-500",
        cardBg: "from-orange-500/10 to-amber-500/5",
        ringColor: "ring-orange-500/20",
      };
    case "blue":
      return {
        badge: "bg-blue-100 text-blue-600 border-blue-200",
        border: "border-blue-500",
        icon: "text-blue-500",
        bgLight: "bg-blue-50/30",
        iconBg: "bg-muted/50",
        hover: "hover:border-blue-300",
        gradient: "from-blue-500 via-cyan-500 to-teal-500",
        text: "text-blue-500",
        cardBg: "from-blue-500/10 to-cyan-500/5",
        ringColor: "ring-blue-500/20",
      };
    default:
      return {
        badge: "bg-primary/10 text-primary border-primary/20",
        border: "border-primary",
        icon: "text-primary",
        bgLight: "bg-muted/30",
        iconBg: "bg-muted/30",
        hover: "hover:border-primary/30",
        gradient: "from-primary via-primary/80 to-accent",
        text: "text-primary",
        cardBg: "from-primary/10 to-accent/5",
        ringColor: "ring-primary/20",
      };
  }
};

const FoundersSection = ({ accentColor = "primary" }: FoundersSectionProps) => {
  const colors = getColorClasses(accentColor);

  return (
    <section id="chi-siamo" className={`section-padding ${colors.bgLight}`}>
      <div className="container-custom px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation variant="fadeUp" className="text-center mb-10 sm:mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full ${colors.badge} text-sm font-medium mb-4 border`}>
            Chi Siamo
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Fondatori & System Architects
          </h2>
          
          {/* Quote */}
          <div className={`relative max-w-xl mx-auto pl-5 sm:pl-6 border-l-4 ${colors.border} text-left`}>
            <Quote className={`absolute -left-3 -top-2 w-5 h-5 sm:w-6 sm:h-6 ${colors.icon} ${colors.iconBg}`} />
            <p className="text-lg sm:text-xl italic text-foreground">
              "Dietro ogni automazione c'è una visione umana."
            </p>
          </div>
        </ScrollAnimation>

        {/* Intro */}
        <ScrollAnimation variant="fadeUp" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Siamo <span className="font-semibold text-foreground">Stefano Taino</span> e <span className="font-semibold text-foreground">Antonio Valente</span>, 
              e insieme abbiamo fondato Kinetra Solutions per aiutare le attività locali a uscire dal caos operativo.
            </p>
          </div>
        </ScrollAnimation>

        {/* Founders Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12 sm:mb-16">
          {/* Stefano Card */}
          <ScrollAnimation variant="slideLeft">
            <div className={`relative h-full p-6 sm:p-8 rounded-2xl border border-border bg-gradient-to-br ${colors.cardBg} backdrop-blur-sm ring-1 ${colors.ringColor}`}>
              <div className="absolute top-4 right-4">
                <Sparkles className={`w-6 h-6 ${colors.icon} opacity-50`} />
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                  ST
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                    Stefano Taino
                  </h3>
                  <p className="text-sm text-muted-foreground">Co-Founder & Tech Architect</p>
                </div>
              </div>
              
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Porta in Kinetra oltre un decennio di esperienza in <span className="font-medium text-foreground">e-commerce, marketing digitale e automazioni basate su intelligenza artificiale</span>. 
                La sua missione è costruire infrastrutture digitali su misura che liberano tempo e risorse.
              </p>

              <div className="mt-6 pt-4 border-t border-border/50">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <TrendingUp className={`w-4 h-4 ${colors.icon}`} />
                  <span>10+ anni di esperienza in automazioni AI</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Antonio Card */}
          <ScrollAnimation variant="slideRight">
            <div className={`relative h-full p-6 sm:p-8 rounded-2xl border border-border bg-gradient-to-br ${colors.cardBg} backdrop-blur-sm ring-1 ${colors.ringColor}`}>
              <div className="absolute top-4 right-4">
                <Award className={`w-6 h-6 ${colors.icon} opacity-50`} />
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                  AV
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                    Antonio Valente
                  </h3>
                  <p className="text-sm text-muted-foreground">Co-Founder & Strategy Lead</p>
                </div>
              </div>
              
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                Fondatore di <span className="font-medium text-foreground">Metodo Sincro®</span>, azienda di mental coaching che ha già aiutato più di 1.100 atleti 
                e ha superato <span className="font-medium text-foreground">1 milione di euro di fatturato</span>.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-3 rounded-lg bg-background/50 border border-border/50">
                  <div className={`text-lg font-bold ${colors.text}`}>8.880+</div>
                  <div className="text-xs text-muted-foreground">ore di consulenza</div>
                </div>
                <div className="p-3 rounded-lg bg-background/50 border border-border/50">
                  <div className={`text-lg font-bold ${colors.text}`}>20+</div>
                  <div className="text-xs text-muted-foreground">professionisti nel team</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {["La Repubblica", "Sport Mediaset", "La Gazzetta", "Millionaire"].map((media) => (
                  <span key={media} className="px-2 py-1 text-xs rounded-full bg-background/80 border border-border/50 text-muted-foreground">
                    {media}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Users className={`w-4 h-4 ${colors.icon}`} />
                <span>#1 in Italia su Trustpilot • 5 stelle su 342 recensioni</span>
              </div>

              <div className="mt-4 pt-4 border-t border-border/50">
                <a 
                  href="https://valenteantonio.it" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm font-medium ${colors.text} hover:underline`}
                >
                  Scopri di più su Antonio
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Together Statement */}
        <ScrollAnimation variant="fadeUp" delay={0.15}>
          <div className={`text-center max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-gradient-to-r ${colors.gradient} text-white mb-12 sm:mb-16`}>
            <p className="text-base sm:text-lg font-medium leading-relaxed">
              Insieme uniamo <span className="font-bold">tecnologia e mentalità vincente</span> per creare soluzioni che non solo automatizzano, 
              ma <span className="font-bold">trasformano il modo in cui lavori</span>.
            </p>
          </div>
        </ScrollAnimation>

        {/* Mission & Differentiators */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left - Mission */}
          <ScrollAnimation variant="slideLeft">
            <div className="space-y-4 text-sm sm:text-base text-muted-foreground">
              <p>
                Non crediamo nei software 'copia e incolla' che vi tengono prigionieri. 
                Il nostro obiettivo è costruire l'infrastruttura digitale della vostra azienda: sistemi intelligenti che 
                rispondono ai clienti, gestionali che ordinano i vostri dati e automazioni che vi restituiscono il tempo che meritate.
              </p>
              <p className="text-lg font-semibold text-foreground">
                Con Kinetra Solutions, il software è vostro, i dati sono vostri e il risultato è garantito.
              </p>
            </div>
          </ScrollAnimation>

          {/* Right - Differentiators */}
          <ScrollAnimation variant="slideRight">
            <div className="space-y-3">
              <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-3">
                Perché Kinetra Solutions è diverso
              </h3>
              <p className={`text-sm sm:text-base font-semibold ${colors.text} mb-4`}>
                Non vendiamo software. Costruiamo sistemi che lavorano al posto vostro.
              </p>
              
              <StaggerContainer staggerDelay={0.15}>
                {differentiators.map((item, index) => (
                  <StaggerItem key={index}>
                    <div className={`group p-4 rounded-xl border border-border bg-card ${colors.hover} hover:shadow-lg transition-all duration-300 mb-3`}>
                      <div className="flex gap-3">
                        <CheckCircle2 className={`w-5 h-5 ${colors.icon} flex-shrink-0 mt-0.5`} />
                        <div>
                          <h4 className="font-display text-sm font-semibold text-foreground mb-1">
                            {item.title}
                          </h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </ScrollAnimation>
        </div>

        {/* Target Audience */}
        <ScrollAnimation variant="fadeUp" delay={0.2}>
          <div className={`mt-12 sm:mt-16 p-5 sm:p-8 rounded-2xl bg-gradient-to-r ${colors.gradient} text-white`}>
            <div className="max-w-3xl">
              <h3 className="font-display text-xl sm:text-2xl font-bold mb-3">
                A chi si rivolge Kinetra Solutions?
              </h3>
              <p className="text-sm text-white/80 mb-5">
                Titolari e professionisti che vogliono eliminare il caos operativo.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-3">
                {targetPoints.map((item, index) => (
                  <div key={index} className="p-3 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm">
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm text-white mb-0.5">
                          {item.title}
                        </h4>
                        <p className="text-xs text-white/70">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="mt-6 text-lg font-semibold">
                Ti riconosci? Possiamo aiutarti.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default FoundersSection;
