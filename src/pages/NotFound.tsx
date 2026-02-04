import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <SEOHead
        title="Pagina non trovata | Kinetra Solutions"
        description="La pagina che stai cercando non esiste. Torna alla homepage di Kinetra Solutions."
        noindex={true}
      />
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Pagina non trovata</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Torna alla Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
