# Documentation Crypted

Cette documentation, générée avec **Docusaurus**, couvre l'API AdonisJS et l'application Nuxt de Crypted. Elle fournit toutes les informations nécessaires pour comprendre, utiliser et contribuer à ces deux parties du projet.

## Prérequis

Avant de commencer à travailler sur la documentation, assurez-vous que les outils suivants sont installés sur votre système :

- **Node.js** : version `v22.12.0` ou supérieure.
- **pnpm** : pour gérer les dépendances.

## Installation

1. Clonez le dépôt de la documentation en SSH pour pouvoir déployer sur Github pages :

   ```bash
   git clone git@github.com:CryptedFR/documentation.git
   cd documentation
   ```

2. Installez les dépendances :

   ```bash
   pnpm install
   ```

## Structure de la documentation

La documentation est organisée en deux grandes sections :

### 1. **API AdonisJS**
- Description des endpoints.
- Guides pour l'authentification et la gestion des données.

### 2. **Application Nuxt**
- Guide utilisateur pour naviguer dans l'application.
- Documentation sur les composants et les fonctionnalités clés.

## Démarrage du serveur de documentation

Pour lancer un serveur local et prévisualiser la documentation :

```bash
pnpm start
```

La documentation sera accessible à l'adresse : `http://localhost:3000`

## Commandes utiles

- **Démarrer le serveur de documentation** :
  ```bash
  pnpm start
  ```

- **Construire la documentation pour la production** :
  ```bash
  pnpm run build
  ```

- **Déployer la documentation sur GitHub Pages (il faut avoir cloner le dépôt en ssh)** :
  ```bash
  pnpm run deploy
  ```

## Déploiement

La documentation peut être déployée avec les étapes suivantes :

1. Construisez le site statique :
   ```bash
   pnpm run build
   ```

2. Déployez sur votre plateforme d'hébergement (par exemple, GitHub Pages, Vercel, ou Netlify).

Pour un déploiement sur GitHub Pages (il faut avoir cloner le dépôt en ssh) :
```bash
  pnpm run deploy
```

---

**Auteur** : [Clément Mistral](https://github.com/clement-mistral)  
**Contact** : clementmistral@pm.me
