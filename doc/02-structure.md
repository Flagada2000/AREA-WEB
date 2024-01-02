# AREA WEB

## 02 - Structure du projet
Voici une vue d'ensemble de la structure des fichiers et des dossiers du projet :
```
.
├── README.md
├── src
│   ├── app
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── service.js
│   │   └── (site)
│   │       ├── contact
│   │       │   └── page.tsx
│   │       ├── create-action
│   │       │   └── page.tsx
│   │       ├── doc
│   │       │   └── page.tsx
│   │       ├── home
│   │       │   ├── home.css
│   │       │   └── page.tsx
│   │       ├── myactions
│   │       │   └── myactions.css
│   │       ├── profile
│   │       │   └── page.tsx
│   │       ├── signin
│   │       │   └── page.tsx
│   │       └── signup
│   │           └── page.tsx
│   ├── assets
│   │   └── img-homepage.png
│   ├── components
│   │   ├── Button.tsx
│   │   └── layered_spike.tsx
│   └── pages
│       └── index.js
```
La structure du projet comprend différents dossiers et fichiers, tels que src pour le code source, app pour les pages de l'application, assets pour les ressources, components pour les composants réutilisables, et pages pour les pages spécifiques.

## Composants
Le front-end comprend actuellement des composants d'animation pour les pages de connexion/inscription, ainsi qu'un composant de base pour les boutons.

## Routage
Le site comprend plusieurs pages :

- Une page d'accueil
- Un lien vers la documentation pour savoir comment créer une action, supprimer, gérer son profil, etc.
- Une page pour afficher les actions créées par l'utilisateur, avec un explorateur pour ajouter des actions/réactions pré-définies proposées par le site.
- Une page de connexion et une page d'inscription.
- Une page de profil.
- Une page de création d'actions et de réactions, avec des options pour éditer des actions et réactions.