# Lūm - Salon de Beauté & Bien-être

Un site vitrine moderne et élégant pour un salon de beauté fictif, offrant une expérience utilisateur immersive avec des animations fluides et un design apaisant.

## 🌟 Caractéristiques

### Design & UX
- **Interface élégante** : Design nordique avec palette de couleurs rose et ambre
- **Animations fluides** : GSAP pour des transitions et effets parallax sophistiqués
- **Responsive** : Adapté à tous les écrans (mobile, tablette, desktop)
- **Typographie raffinée** : Playfair Display pour les titres et Inter pour le corps de texte

### Pages

#### 🏠 Accueil (Landing Page)
- Hero section plein écran avec effet parallax
- Scroll storytelling avec animations déclenchées au scroll
- Présentation des soins signature avec cartes animées
- Section témoignages clients
- Call-to-action vers la page de réservation

#### 💆 Soins
- Grille de 12 soins différents organisés par catégorie
- Cartes animées au survol et au scroll
- Affichage des informations : nom, durée, prix, description
- Navigation directe vers la réservation

#### 📅 Réserver
- Formulaire complet de réservation
- Champs : nom, email, téléphone, type de soin, date, heure
- Validation des données en temps réel
- Modal de confirmation animée après soumission

### Composants

#### Navbar
- Navbar fixe avec effet de transparence/opacité selon le scroll
- Navigation entre les 3 pages principales
- Indicateur de page active
- Adaptation automatique aux pages (transparent sur accueil, blanc sur autres pages)

#### Footer
- Informations de contact
- Liens réseaux sociaux
- Design épuré et professionnel

#### Loader
- Animation d'intro au chargement de l'application
- Transition fluide avec fade-out

## 🚀 Technologies utilisées

- **React 18** - Bibliothèque JavaScript pour l'interface utilisateur
- **TypeScript** - Typage statique pour JavaScript
- **Vite** - Build tool rapide et moderne
- **React Router DOM 7** - Gestion de la navigation
- **GSAP** - Bibliothèque d'animations professionnelle
  - ScrollTrigger pour animations au scroll
  - Effets parallax
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Icônes modernes et élégantes

## 📦 Installation

### Prérequis
- Node.js 18+ et npm

### Étapes d'installation

1. Cloner le dépôt
```bash
git clone <url-du-repo>
cd project
```

2. Installer les dépendances
```bash
npm install
```

3. Lancer le serveur de développement
```bash
npm run dev
```

4. Ouvrir dans le navigateur
```
http://localhost:5173
```

## 🛠️ Scripts disponibles

```bash
# Démarrer le serveur de développement
npm run dev

# Créer une version de production
npm run build

# Prévisualiser la version de production
npm run preview

# Linter le code
npm run lint

# Vérifier les types TypeScript
npm run typecheck
```

## 📁 Structure du projet

```
project/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx        # Navigation principale
│   │   ├── Footer.tsx        # Pied de page
│   │   └── Loader.tsx        # Animation de chargement
│   ├── pages/
│   │   ├── Home.tsx          # Page d'accueil avec scroll storytelling
│   │   ├── Soins.tsx         # Liste des soins
│   │   └── Reserver.tsx      # Formulaire de réservation
│   ├── App.tsx               # Composant principal avec routing
│   ├── main.tsx              # Point d'entrée
│   └── index.css             # Styles globaux et fonts
├── public/                   # Fichiers statiques
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## 🎨 Palette de couleurs

- **Rose** : Accent principal (`rose-400`, `rose-50`)
- **Ambre** : Accent secondaire (`amber-50`, `amber-400`)
- **Gris** : Texte et backgrounds (`gray-800`, `gray-600`, `gray-50`)
- **Blanc** : Base et cartes

## ✨ Animations GSAP

### Page d'accueil
- Fade-in des éléments du hero avec délais progressifs
- Parallax sur l'image de fond du hero
- Fade-in des sections au scroll avec ScrollTrigger
- Animations décalées des cartes de soins
- Animations alternées des témoignages

### Page Soins
- Fade-in du titre
- Animations décalées des cartes de soins au scroll
- Effets de hover personnalisés

### Page Réserver
- Fade-in du titre et du formulaire
- Animation scale-up du modal de confirmation
- Transitions fluides entre les états

## 🖼️ Images

Les images proviennent de **Pexels** (banque d'images libres de droits) :
- Photos professionnelles de soins de beauté
- Images de spa et bien-être
- Atmosphère calme et relaxante

## 📱 Responsive Design

- **Mobile** : Layout en colonne unique, navigation optimisée
- **Tablette** : Grille 2 colonnes pour les soins
- **Desktop** : Grille 3 colonnes, pleine utilisation de l'espace

## 🔮 Fonctionnalités futures possibles

- [ ] Intégration backend avec Supabase pour les réservations
- [ ] Système d'authentification pour les utilisateurs
- [ ] Dashboard admin pour gérer les rendez-vous
- [ ] Galerie photos interactive
- [ ] Blog/actualités du salon
- [ ] Système de paiement en ligne
- [ ] Multi-langues (FR/EN)
- [ ] Mode sombre

## 📄 Licence

Projet fictif à des fins de démonstration.

## 👥 Auteur

Créé avec passion pour démontrer les capacités de React, TypeScript, GSAP et Tailwind CSS.

---

**Note** : Ce projet est un site vitrine fictif créé à des fins de démonstration. Le salon "Lūm" n'existe pas réellement.