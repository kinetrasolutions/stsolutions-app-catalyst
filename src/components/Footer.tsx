import { Mail, Phone } from "lucide-react";
import logoLight from "@/assets/logo-light.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom section-padding px-5 sm:px-6 lg:px-8 pb-6 sm:pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8 mb-10 sm:mb-12">
          {/* Brand Column */}
          <div className="sm:col-span-2">
            <img
              src={logoLight}
              alt="ST Solutions"
              className="h-8 sm:h-10 w-auto mb-4 sm:mb-6"
            />
            <p className="text-sm sm:text-base text-secondary-foreground/70 max-w-md">
              Automazione AI e Sistemi Digitali su Misura per attività locali. 
              Riduci i costi operativi, elimina le attività ripetitive e concentrati sui tuoi clienti.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-base sm:text-lg mb-3 sm:mb-4">Link Rapidi</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { label: "Soluzioni", href: "#soluzioni" },
                { label: "Settori", href: "#settori" },
                { label: "Come Funziona", href: "#come-funziona" },
                { label: "Chi Siamo", href: "#chi-siamo" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-base sm:text-lg mb-3 sm:mb-4">Contatti</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="mailto:studio.stsolutions@protonmail.com"
                  className="flex items-center gap-2 text-sm sm:text-base text-secondary-foreground/70 hover:text-primary transition-colors break-all"
                >
                  <Mail size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">studio.stsolutions@protonmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/393452838679?text=Buongiorno%20%2C%20sarei%20interessato%20alle%20vostre%20soluzioni%20per%20la%20mia%20attività"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm sm:text-base text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  <Phone size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                  +39 345 283 8679
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-secondary-foreground/10 flex flex-col gap-4 text-xs sm:text-sm text-secondary-foreground/50">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>© {currentYear} Tutti i diritti riservati.</p>
            <span className="hidden sm:inline">|</span>
            <p>Ragione sociale: Stefano Taino</p>
            <span className="hidden sm:inline">|</span>
            <p>P.IVA: 01744080191</p>
          </div>
          <div className="flex gap-4 sm:gap-6 justify-center sm:justify-start">
            <a href="/privacy-policy" className="hover:text-secondary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="/termini-condizioni" className="hover:text-secondary-foreground transition-colors">
              Termini e Condizioni
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;