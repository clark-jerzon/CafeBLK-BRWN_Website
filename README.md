# Café BLK & BRWN Website

Website for **Café BLK & BRWN**, a coffee shop in Tanza, Cavite with seven branches across Cavite and Metro Manila. Built for the *Web Development Project, Phase 1* using plain HTML, CSS and JavaScript.

**Live site:** https://clark-jerzon.github.io/CafeBLK-BRWN_Website/

## Pages

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Hero, popular picks, how booking works, branches |
| Our story | `about.html` | Café background |
| Menu | `menu.html` | 81 items in 7 categories, every item priced |
| Branches | `branches.html` | Hours, directions and reserve links for 7 branches |
| Gallery | `gallery.html` | Photos |
| Contact | `contact.html` | Phone, email, social links and inquiry form |
| Reserve | `reserve.html` | Reservation form with a 3-step progress bar |
| Reservation status | `track.html` | Reservation progress tracker |
| Staff dashboard | `staff.html` | KPIs, schedule, customers, reports, admin controls |
| Privacy | `privacy.html` | How reservation data is used |

## Project structure

```
CafeBLK-BRWN_Website/
├── index.html            Homepage (required)
├── about.html            Café story
├── menu.html             Menu and prices
├── branches.html         Branch hours and directions
├── gallery.html          Photo gallery
├── contact.html          Contact details and inquiry form
├── reserve.html          Reservation form
├── track.html            Reservation status
├── staff.html            Staff dashboard
├── privacy.html          Privacy notice
├── style.css             Main stylesheet
├── script.js             Main JavaScript file
├── assets/
│   ├── fonts/            DM Sans and Playfair Display (SIL OFL)
│   ├── icons/            SVG icon set
│   └── images/           logo, hero, menu, branches, gallery
├── README.md
├── .gitignore
└── LICENSE
```

## Run locally

1. Install [Visual Studio Code](https://code.visualstudio.com) and the **Live Server** extension.
2. Clone the repository: `git clone https://github.com/clark-jerzon/CafeBLK-BRWN_Website.git`
3. Open the folder in VS Code, right-click `index.html` and choose **Open with Live Server**.

## Deploy with GitHub Pages

Repository **Settings → Pages → Source: `main` branch, `/ (root)` → Save**. The site is then served at `https://clark-jerzon.github.io/CafeBLK-BRWN_Website/`.

## Design system

The look is black, brown and white glassmorphism: frosted translucent panels over a warm brown gradient, with a white-to-cream gradient reserved for the primary call to action.

| Principle | How it is applied |
|---|---|
| **Visual hierarchy** | One primary action per view (white gradient button), glass secondary buttons, text links for tertiary actions. Size, weight and contrast order everything else. Prices and dashboard numbers are the largest elements on their cards. |
| **Scale and proximity** | An 8-point spacing scale (`--space-1` to `--space-9`). Related items sit 4 to 16 px apart, groups 24 to 32 px, sections 72 px or more. |
| **Typography scale** | A 1.25 modular scale (`--step--1` to `--step-6`). Headings use Playfair Display, interface text uses DM Sans. Nothing is smaller than 13 px and body text is 16 px with a 62-character line length. |
| **Scanning pattern** | Z-pattern on the home page (logo, navigation, hero text, image, call to action). F-pattern on the menu, branches and dashboard: left-aligned headings, key facts at the start of each row. |
| **Responsive behaviour** | Fluid grids with breakpoints at 1100, 900, 720 and 480 px. Navigation collapses to a menu button, dashboard tables become stacked cards, and touch targets are at least 44 px. |
| **Icons** | SVG icons used only where they aid scanning (status, contact, process steps), inherited from text colour. |
| **Progress indication** | The reservation form and reservation status page both show a progress bar and numbered steps at the top. |

Forms follow the same rules: one visual style for every field, input types that match the data (email, tel, date, time, number), a country prefix on the phone field, and labels above fields.

## Content notes for the team

- Reservation and inquiry forms open the visitor's email app with the details filled in (a `mailto:` action), so they work on static hosting without a server.
- The staff dashboard, reservation status and customer records are **static content** written in HTML. They show how the finished system will look. Approve, decline, save and export buttons are not wired to a database yet; that comes with the interactivity phase.
- Seven food prices (Nachos, Chicken Fajita Roll, Hash and Egg, Gochujang Pork, Quesadilla, Tuna Pasta, Bacon and Pancakes) are estimates and should be confirmed with the café. The other food prices come from the café's Tanza and Naic delivery listings and may differ in-store.
- Operating hours for Kawit (regular hours) and Festival Mall, Alabang were not supplied, so those cards ask visitors to contact the branch.

## Credits

Photographs, logo and brand name belong to Café BLK & BRWN. Fonts: [DM Sans](https://fonts.google.com/specimen/DM+Sans) and [Playfair Display](https://fonts.google.com/specimen/Playfair+Display), SIL Open Font License. Icons are hand-drawn in the Lucide style.
