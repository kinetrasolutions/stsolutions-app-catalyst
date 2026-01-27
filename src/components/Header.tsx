import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isProfessionistiSalute = location.pathname === "/professionisti-salute";
  const isRistorazione = location.pathname === "/ristorazione";
  const isParrucchieriEstetica = location.pathname === "/parrucchieri-estetica";
  const isVerticalPage = isProfessionistiSalute || isRistorazione || isParrucchieriEstetica;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links based on current page
  const navLinks = isVerticalPage
    ? [
        { href: "#soluzioni", label: "Soluzioni" },
        { href: "#come-funziona", label: "Come Funziona" },
        { href: "#chi-siamo", label: "Chi Siamo" },
      ]
    : [
        { href: "#soluzioni", label: "Soluzioni" },
        { href: "#settori", label: "Settori" },
        { href: "#come-funziona", label: "Come Funziona" },
        { href: "#chi-siamo", label: "Chi Siamo" },
      ];

  // Theme-specific styles for Parrucchieri/Estetica page (pink/gold theme with light background)
  const getLinkHoverColor = () => {
    if (isParrucchieriEstetica) {
      return isScrolled ? "text-foreground hover:text-pink-500" : "text-gray-700 hover:text-pink-500";
    }
    return isScrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white";
  };

  const getButtonStyle = () => {
    if (isParrucchieriEstetica) {
      return "bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 hover:from-pink-600 hover:via-rose-600 hover:to-amber-600 text-white shadow-lg hover:shadow-xl transition-all duration-300";
    }
    return "";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo - Always links to homepage */}
          <a href="/" className="flex items-center gap-2 group">
            <img
              src={isScrolled || isParrucchieriEstetica ? logoDark : logoLight}
              alt="ST Solutions"
              className="h-8 md:h-10 w-auto transition-all duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors animated-underline ${getLinkHoverColor()}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center justify-center">
            {isParrucchieriEstetica ? (
              <Button size="default" className={getButtonStyle()}>
                Prenota una Chiamata Gratuita
              </Button>
            ) : (
              <Button variant="hero" size="default">
                Prenota una Chiamata Gratuita
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass border-t border-border animate-fade-in">
            <div className="container-custom px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-foreground py-2"
                >
                  {link.label}
                </a>
              ))}
              {isParrucchieriEstetica ? (
                <Button size="lg" className={getButtonStyle() + " mt-4"}>
                  Prenota una Chiamata Gratuita
                </Button>
              ) : (
                <Button variant="hero" size="lg" className="mt-4">
                  Prenota una Chiamata Gratuita
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
