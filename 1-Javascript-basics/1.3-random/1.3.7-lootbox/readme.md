## 🎮 Oppgave: Lag et “Loot Box Simulator”-spill

### 🧱 1. Sett opp filene

1. Lag en ny mappe, f.eks. `lootbox`.
2. Lag to filer inni mappa:

   * `index.html`
   * `lootbox.js`
3. Kopier HTML-koden jeg (læreren) viser dere inn i `index.html`.

---

### 💡 2. Forstå målet

Når brukeren klikker på knappen “Åpne loot box”:

* Et tilfeldig tall velges med `Math.random()`.
* Ut fra tallet vises en **tekst** i `<p id="result">`.
* Teksten kan være for eksempel:
  `"Du fikk en Epic gjenstand!"` eller `"Common reward – bedre lykke neste gang!"`
* Bonus: Endre fargen på teksten etter sjeldenhet.

---

### ⚙️ 3. Koble sammen HTML og JS

I HTML-fila ligger allerede linja nederst:

```html
<script src="lootbox.js"></script>
```

og knappen har:

```html
<button onclick="openBox()">Åpne loot box</button>
```

Det betyr at JavaScript-funksjonen må hete `openBox()`.

---

### 🧠 4. Lag funksjonen i `lootbox.js`

1. Lag en funksjon med navnet `openBox`.
   
2. Inni funksjonen: bruk `Math.random()` for å lage et tilfeldig tall.
3. Bruk `if`, `else if` og `else` for å bestemme hvilken “loot” spilleren får.

**Hint til logikk:**

```text
Hvis tallet er under 0.7  → Common (70%)
Hvis tallet er under 0.9  → Rare (20%)
Hvis tallet er under 0.98 → Epic (8%)
Ellers                   → Legendary (2%)
```

4. Bruk `document.getElementById("result")` for å endre teksten.
   (for eksempel `.textContent = "Du fikk en Rare gjenstand!"`)

5. (Valgfritt) Endre farge:

   * Bruk `document.getElementById("result").style.color = "blue"`
     eller en annen farge for hver sjeldenhet.

---

### ✨ 5. Test programmet

1. Åpne `index.html` i nettleseren.
2. Trykk på **“Åpne loot box”** flere ganger.
3. Ser du forskjellige resultater?
   Hvis ikke, sjekk:

   * Har du skrevet `Math.random()` riktig?
   * Har du brukt riktig id (`result`)?
   * Er filene lagret?

---

### 🧩 6. Bonusidéer (for de raske)

* Legg til **bilder eller emojis** for hver sjeldenhet (💎, 🧤, ⚔️).
* Spill av en **lyd** når man får “Legendary”.
* Tell hvor mange ganger brukeren har åpnet boksen.
* Lag en “Inventar-liste” med alle gjenstandene man har fått.

