import { useState } from "react";
import { ArrowRight, MessageCircle, Calendar, Mail, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBar from "@/components/CookieBar";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Il nome è obbligatorio").max(100, "Il nome è troppo lungo"),
  email: z.string().trim().email("Email non valida").max(255, "Email troppo lunga"),
  phone: z.string().trim().optional(),
  message: z.string().trim().min(1, "Il messaggio è obbligatorio").max(2000, "Il messaggio è troppo lungo"),
  privacyAccepted: z.literal(true, { errorMap: () => ({ message: "Devi accettare la privacy policy" }) })
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contatti = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    privacyAccepted: false as unknown as true
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form data
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach(err => {
        const field = err.path[0] as keyof ContactFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone || undefined,
          message: formData.message
        }
      });

      if (error) {
        throw error;
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "", privacyAccepted: false as unknown as true });
      
      toast({
        title: "Messaggio inviato!",
        description: "Ti risponderemo al più presto.",
      });
    } catch (error: any) {
      console.error("Error sending email:", error);
      toast({
        title: "Errore",
        description: "Si è verificato un errore nell'invio del messaggio. Riprova o contattaci via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappLink = "https://wa.me/393452838679?text=Buongiorno%20%2C%20sarei%20interessato%20alle%20vostre%20soluzioni%20per%20la%20mia%20attività";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="container-custom px-5 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Contattaci
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
              Parliamo del tuo{" "}
              <span className="text-gradient">progetto</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Compila il form, scrivici su WhatsApp o prenota direttamente una chiamata. 
              Ti risponderemo entro 24 ore.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-display text-lg sm:text-xl font-bold text-foreground">Inviaci un messaggio</h2>
                  <p className="text-xs sm:text-sm text-muted-foreground">Ti risponderemo al più presto</p>
                </div>
              </div>

              {isSubmitted ? (
                <div className="text-center py-10 sm:py-12">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-green-500" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-2">
                    Messaggio inviato!
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-6">
                    Abbiamo ricevuto il tuo messaggio e ti risponderemo al più presto.
                  </p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                    Invia un altro messaggio
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm sm:text-base">Nome e Cognome *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Mario Rossi"
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && <p className="text-xs sm:text-sm text-destructive">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm sm:text-base">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="mario@esempio.it"
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && <p className="text-xs sm:text-sm text-destructive">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm sm:text-base">Telefono (opzionale)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+39 123 456 7890"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm sm:text-base">Messaggio *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Descrivi brevemente la tua attività e come possiamo aiutarti..."
                      rows={4}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && <p className="text-xs sm:text-sm text-destructive">{errors.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="privacyAccepted"
                        checked={formData.privacyAccepted}
                        onCheckedChange={(checked) => {
                          setFormData(prev => ({ ...prev, privacyAccepted: checked as boolean as true }));
                          if (errors.privacyAccepted) {
                            setErrors(prev => ({ ...prev, privacyAccepted: undefined }));
                          }
                        }}
                        className={errors.privacyAccepted ? "border-destructive" : ""}
                      />
                      <Label 
                        htmlFor="privacyAccepted" 
                        className="text-xs sm:text-sm text-muted-foreground leading-relaxed cursor-pointer"
                      >
                        Accetto la{" "}
                        <a 
                          href="/privacy-policy" 
                          target="_blank" 
                          className="text-primary hover:underline"
                        >
                          Privacy Policy
                        </a>{" "}
                        e acconsento al trattamento dei miei dati personali *
                      </Label>
                    </div>
                    {errors.privacyAccepted && <p className="text-xs sm:text-sm text-destructive">{errors.privacyAccepted}</p>}
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    {isSubmitting ? "Preparazione..." : "Invia Messaggio"}
                    <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              )}
            </div>

            {/* Alternative Contact Options */}
            <div className="space-y-5 sm:space-y-6">
              {/* WhatsApp Card */}
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20 rounded-3xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">WhatsApp</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">Risposta immediata</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6">
                  Preferisci una risposta veloce? Scrivici direttamente su WhatsApp per una chat immediata.
                </p>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 group"
                  asChild
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Scrivici su WhatsApp
                    <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>

              {/* Calendar Card */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-3xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">Prenota una Chiamata</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">10 minuti, senza impegno</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-5 sm:mb-6">
                  Vuoi parlare direttamente con noi? Prenota una chiamata conoscitiva gratuita quando preferisci.
                </p>
                <Button variant="hero" size="lg" className="w-full group" asChild>
                  <a href="https://calendly.com/kinetrasolutions-proton/30min" target="_blank" rel="noopener noreferrer">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Prenota una Chiamata
                    <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="bg-muted/50 rounded-2xl p-5 sm:p-6">
                <h4 className="font-semibold text-sm sm:text-base text-foreground mb-3 sm:mb-4">Cosa aspettarsi</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    "Risposta entro 24 ore lavorative",
                    "Analisi gratuita della tua situazione",
                    "Proposta personalizzata senza impegno",
                    "Nessun costo nascosto"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <CookieBar />
    </div>
  );
};

export default Contatti;
