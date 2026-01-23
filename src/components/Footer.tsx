import { Mail, Phone, Linkedin, Instagram } from "lucide-react";
import logoLight from "@/assets/logo-light.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <img
              src={logoLight}
              alt="ST Solutions"
              className="h-10 w-auto mb-6"
            />
            <p className="text-secondary-foreground/70 max-w-md mb-6">
              Automazione AI e Sistemi Digitali su Misura per attività locali. 
              Riduci i costi operativi, elimina le attività ripetitive e concentrati sui tuoi clienti.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Link Rapidi</h4>
            <ul className="space-y-3">
              {[
                { label: "Soluzioni", href: "#soluzioni" },
                { label: "Settori", href: "#settori" },
                { label: "Come Funziona", href: "#come-funziona" },
                { label: "Chi Siamo", href: "#chi-siamo" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contatti</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:studio.stsolutions@protonmail.com"
                  className="flex items-center gap-2 text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  <Mail size={16} />
                  studio.stsolutions@protonmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/393452838679?text=Buongiorno%20%2C%20sarei%20interessato%20alle%20vostre%20soluzioni%20per%20la%20mia%20attività"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  <Phone size={16} />
                  +39 345 283 8679
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/50">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p>© {currentYear} Tutti i diritti riservati.</p>
            <span className="hidden md:inline">|</span>
            <p>Ragione sociale: Stefano Taino</p>
            <span className="hidden md:inline">|</span>
            <p>P.IVA: 01744080191</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-secondary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-secondary-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;