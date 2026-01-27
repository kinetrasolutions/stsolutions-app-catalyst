
# Piano: Redesign Pagina Parrucchieri/Estetica con Tema Rosa + Oro su Sfondo Chiaro

## Obiettivo
Trasformare la pagina Parrucchieri/Estetica da tema scuro con accenti cyan a un design premium con **sfondo bianco/chiaro** e accenti **rosa + oro combinati**.

---

## Panoramica Cambiamenti

### Palette Colori Nuova
- **Sfondo Hero**: Gradiente chiaro crema/rosato invece di scuro
- **Accenti primari**: Rosa/fuchsia (`pink-500`, `rose-500`)  
- **Accenti secondari**: Oro/gold (`amber-400`, `yellow-500`)
- **Checkmark/Glow**: Rosa con riflessi dorati
- **Testo principale**: Scuro su sfondo chiaro

---

## Modifiche Tecniche

### 1. Hero Section
**File:** `src/pages/ParrucchieriEstetica.tsx`

- Cambiare `bg-gradient-hero` (scuro) → nuovo gradiente chiaro
- Background: `bg-gradient-to-b from-white via-pink-50/30 to-rose-50/50`
- Glow decorativi: rosa/oro invece di primary/cyan
- Testo headline: scuro (`text-gray-900`) con parole chiave in rosa/oro
- Checkmark: gradiente da rosa a oro con glow rosa

**Prima:**
```text
bg-gradient-hero (nero/scuro)
text-cyan-400 (accenti)
from-cyan-400 to-cyan-600 (checkmark)
```

**Dopo:**
```text
bg-gradient-to-b from-white via-pink-50/30 to-rose-50/50
text-pink-500 / text-amber-500 (accenti)
from-pink-500 to-rose-500 + oro (checkmark)
```

### 2. Badge e Elementi Decorativi
- Badge header: `bg-pink-100 text-pink-600` invece di `bg-pink-500/20 text-pink-400`
- Orbs decorativi: `bg-pink-200/50` e `bg-amber-200/40`
- Grid pattern: più visibile su sfondo chiaro

### 3. Bottoni CTA
- Bottone primario: gradiente rosa-oro
- Mantiene il bottone WhatsApp verde per riconoscibilità

### 4. Sezioni Successive
Le sezioni Challenges, Solutions, ecc. mantengono sfondo bianco/chiaro con accenti rosa/oro coerenti.

---

## Esempio Visivo del Nuovo Stile

```text
┌──────────────────────────────────────────────────┐
│  SFONDO: Bianco → Rosa pallido → Crema           │
│                                                   │
│  [Badge rosa su rosa chiaro]                     │
│                                                   │
│  L'AI che rivoluziona                            │
│  LA GESTIONE (rosa) E I TRATTAMENTI (oro)        │
│  nel tuo Salone                                  │
│                                                   │
│  ✓ (rosa glow) Prenotazioni h24...               │
│  ✓ (rosa glow) Richiami automatici...            │
│  ✓ (rosa glow) Trasforma il tuo tempo...         │
│                                                   │
│  [PRENOTA CHIAMATA - rosa/oro]  [WHATSAPP]       │
└──────────────────────────────────────────────────┘
```

---

## File da Modificare
1. **`src/pages/ParrucchieriEstetica.tsx`** - Tutti i cambiamenti concentrati qui

## Impatto
- Look premium e lussuoso specifico per saloni di bellezza
- Maggiore differenziazione dalle altre pagine verticali (Salute=scuro+cyan, Ristorazione=scuro+cyan)
- Coerenza con l'estetica del settore beauty
