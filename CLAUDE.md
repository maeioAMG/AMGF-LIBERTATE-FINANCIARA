# amgf-finance.com (site oficial) — reguli pentru Claude

Site-ul oficial AMGF Finance. Textele trebuie să rămână conforme MiCA.

## Reguli de verificare (înainte de „gata”)
1. Înainte de orice modificare, scrie 3–5 criterii de acceptare verificabile.
2. Dacă există `package.json`, folosește comenzile de acolo. Dacă e site static, verifică cel puțin: HTML valid (fără tag-uri sau paranteze duble rupte), linkuri interne existente, fără erori JS evidente.
3. Arată rezultatul real al verificărilor, nu un rezumat.
4. La final, pentru fiecare criteriu: ✅ verificat (cu dovadă), ❌ eșuat, sau ⚠️ neverificabil aici — și spune ce trebuie verificat manual în browser/telefon.
5. Modificări minime, strict legate de sarcină.
6. Raportul final scurt, în română: ce s-a schimbat, ce fișiere, ce rămâne de verificat.

## Comenzi reale în acest repo
- Site static (HTML/CSS/JS), fără build și fără `package.json`.
- Fișiere cheie: `index.html`, `whitepaper.html`, `community.html`, `stats.html`, `legal.html`, `script.js` (traduceri), `style.css`, `sitemap.xml`, `robots.txt`, `llms.txt`, `CNAME`.
- Nu șterge și nu modifica `CNAME` (leagă domeniul amgf-finance.com).

## Reguli specifice acestui proiect
- NU modifica culorile site-ului. Niciodată.
- Nu lucra direct pe `main`. Fă o ramură nouă și deschide Pull Request.
- Înainte de modificări mari, verifică să existe un backup (ramură + tag).
- Fără promisiuni de profit, randament garantat sau sfaturi de investiții în texte (MiCA).
- Editorul rămâne anonim („AMGF Finance”); contact public: contact@amgf-finance.com. Nu adăuga nume, adrese sau date personale.
- Nu strica SEO: păstrează Open Graph, JSON-LD, sitemap, robots.txt, llms.txt. Dacă adaugi o pagină, adaug-o și în sitemap.
- Traducerile (RO/EN/FR/RU) trebuie actualizate împreună, nu doar o limbă.
