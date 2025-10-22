# Portfolio Website

Een moderne, responsieve portfolio-website gebouwd met HTML, CSS en JavaScript. Toont projecten met interactieve modals, filters en een contactformulier.

## 🚀 Live Demo

Bekijk de website live op: [https://daanschepens.github.io/Protfoliowebsite/](https://daanschepens.github.io/Protfoliowebsite/)

## 📋 Features

- **Responsief Design**: Werkt perfect op desktop, tablet en mobiel
- **Dark/Light Theme**: Automatische thema-detectie met handmatige keuze
- **Project Gallery**: Interactieve projecten grid met filters
- **Modal Popups**: Gedetailleerde project informatie in modals
- **Contact Formulier**: Direct contact via mailto
- **Toegankelijkheid**: Semantische HTML en ARIA labels
- **SEO Geoptimaliseerd**: Meta tags en manifest voor PWA

## 🛠️ Technologieën

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- JavaScript (ES6+)
- Progressive Web App (PWA)

## 📁 Project Structuur

```
Protfoliowebsite/
├── index.html          # Hoofdpagina
├── styles.css          # Stijlen
├── script.js           # JavaScript functionaliteit
├── manifest.webmanifest # PWA manifest
├── favicon.svg         # Favicon
├── README.md           # Dit bestand
└── img/                # Project afbeeldingen
    ├── screenshot1.png
    ├── screenshot2.png
    └── ...
```

## 🚀 Snel Starten

1. **Clone de repository:**
   ```bash
   git clone https://github.com/DaanSchepens/Protfoliowebsite.git
   cd Protfoliowebsite
   ```

2. **Open in browser:**
   - Dubbelklik op `index.html`
   - Of gebruik een lokale server: `python -m http.server 8000`

## 🎨 Aanpassen

### Persoonlijke Informatie
- Bewerk `index.html` om je naam, bio en contactgegevens aan te passen
- Update de project data in `script.js`

### Projecten Toevoegen
Voeg nieuwe projecten toe aan de `projects` array in `script.js`:

```javascript
{
  id: 'nieuw-project',
  title: 'Project Naam',
  category: ['web'], // of ['app'], ['school'], etc.
  description: 'Korte beschrijving van het project.',
  image: 'img/project-afbeelding.jpg',
  demo: 'https://demo-link.com', // of '#' als geen demo
  code: 'https://github.com/username/repo'
}
```

### Thema Kleuren
Pas de CSS custom properties aan in `styles.css` voor een eigen kleurenschema.

## 📱 Progressive Web App

De website kan geïnstalleerd worden als PWA op ondersteunde apparaten voor een app-achtige ervaring.

## 🤝 Bijdragen

Voel je vrij om een pull request te maken voor verbeteringen!

## 📄 Licentie

Dit project is beschikbaar onder de MIT License.

---

**Gemaakt door:** Daan Schepens
**GitHub:** [@DaanSchepens](https://github.com/DaanSchepens)
