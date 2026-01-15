import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const CookieBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t border-border animate-slide-up">
      <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito.
        </p>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" onClick={handleDecline}>
            Rifiuta
          </Button>
          <Button variant="default" size="sm" onClick={handleAccept}>
            Accetta
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBar;
