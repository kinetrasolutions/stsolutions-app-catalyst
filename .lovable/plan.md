
# Piano: Redesign Sezione "A chi si rivolge" per Mobile

## Problema Identificato
La sezione con i 6 punti target è presentata come una lista continua di testo su sfondo scuro. Su mobile risulta:
- Troppo densa e ammassata
- Faticosa da leggere (muro di testo)
- Poco respiro visivo tra i punti

## Soluzione Proposta

### Approccio: Card Separate con Design Arioso

Trasformare i 6 punti da lista compatta a **card individuali** con più spazio e gerarchia visiva chiara.

### Modifiche Tecniche

**File: `src/components/About.tsx`**

1. **Ridurre i punti da 6 a 4** (i più impattanti) per alleggerire
2. **Trasformare in card separate** invece di lista bullet
3. **Aggiungere più padding e gap** tra gli elementi
4. **Separare visivamente titolo e descrizione** con line-height maggiore
5. **Su mobile: mostrare solo titoli** con descrizioni più corte o nascoste

### Nuovo Layout Mobile

```text
┌────────────────────────────────────┐
│  A chi si rivolge ST Solutions?    │
│                                    │
│  Breve intro (2 righe max)         │
├────────────────────────────────────┤
│                                    │
│  ┌──────────────────────────────┐  │
│  │ ✓ Troppo tempo in gestione   │  │
│  │   Descrizione breve          │  │
│  └──────────────────────────────┘  │
│                                    │
│  ┌──────────────────────────────┐  │
│  │ ✓ Risposte lente ai clienti  │  │
│  │   Descrizione breve          │  │
│  └──────────────────────────────┘  │
│                                    │
│  ┌──────────────────────────────┐  │
│  │ ✓ Commissioni piattaforme    │  │
│  │   Descrizione breve          │  │
│  └──────────────────────────────┘  │
│                                    │
│  ┌──────────────────────────────┐  │
│  │ ✓ Software non adatto        │  │
│  │   Descrizione breve          │  │
│  └──────────────────────────────┘  │
│                                    │
│  Ti riconosci? Possiamo aiutarti.  │
└────────────────────────────────────┘
```

### Dettagli Implementazione

| Elemento | Prima | Dopo |
|----------|-------|------|
| Punti | 6 | 4 (più essenziali) |
| Layout | Lista bullet continua | Card separate con bordi |
| Spacing | `space-y-3` | `space-y-5` o `gap-5` |
| Descrizioni | Lunghe | Accorciate (max 15 parole) |
| Bullet | Pallino piccolo | Icona CheckCircle colorata |
| Padding card | Nessuno | `p-4` con bordo sottile |

### Contenuti Rivisti (4 punti chiave)

1. **"Il lavoro gestionale vi ruba tempo"** - Ore perse al telefono invece di lavorare
2. **"Perdete clienti per risposte lente"** - Non riuscite a rispondere in tempo reale
3. **"Pagate troppe commissioni"** - Il 20-30% va alle piattaforme esterne
4. **"Il software standard non basta"** - Nessuna soluzione si adatta al vostro business

### Vantaggi
- Lettura più scorrevole e meno faticosa
- Maggiore respiro visivo tra i concetti
- Ogni card è un "blocco mentale" separato
- Descrizioni corte = meno sforzo cognitivo
