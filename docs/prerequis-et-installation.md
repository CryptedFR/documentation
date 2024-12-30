---
title: Prérequis et Installation
slug: /prerequis-et-installation
sidebar_position: 1
---

# Prérequis et Installation

## Prérequis

Avant de commencer, assurez-vous que les éléments suivants sont installés sur votre machine :

### Outils nécessaires

- **Node.js** : `v22.12.0`.
  - Téléchargez-le depuis [nodejs.org](https://nodejs.org/).
- **pnpm** :
  - Pour installer `pnpm` :
    ```bash
    npm install -g pnpm
    ```
- **Podman** et **Podman Compose** : Pour les conteneurs de base de données et autres services.
  - Téléchargez Docker depuis [podman.io](https://podman.io/).

### Configuration système recommandée

- **OS** : Linux.
- **RAM** : 4 Go ou plus.
- **Stockage** : Minimum 10 Go d'espace libre.

---

## Installation

### 1. Cloner le dépôt

Clonez le dépôt contenant l'API AdonisJS depuis votre système de contrôle de version :

```bash
git clone git@github.com:CryptedFR/documentation.git
```

### 2. Installer les dépendances

Utilisez `pnpm` pour installer les dépendances du projet :

```bash
pnpm install
```

### 3. Configurer les variables d'environnement

Dupliquez le fichier `.env.example` et renommez-le en `.env` :

```bash
cp .env.example .env
```

**Base de données**

- **DB_CONNECTION** : Type de base de données (par exemple, `pg` pour PostgreSQL).
- **DB_HOST** : Adresse de l'hôte de la base de données.
- **DB_PORT** : Port de connexion à la base de données.
- **DB_USER** et **DB_PASSWORD** : Identifiants d'accès.

**MinIO S3**

- **MINIO_ROOT_USER** : Nom d'utilisateur pour se connecter et utiliser MinIO.
- **MINIO_ROOT_PASSWORD** : Mot de passe pour se connecter et utiliser MinIO.
- **MINIO_ACCESS_KEY_ID** : Mettre le nom d'utilisateur MinIO.
- **MINIO_SECRET_ACCESS_KEY** : Mettre le mot de passe MinIO.
- **MINIO_ENDPOINT** : Endpoint du serveur S3 et du CDN (pour MinIO ce sera http://localhost:9000).
- **MINIO_REGION** : La région n'est pas importante en développement, mettre `us-west-1`
- **S3_BUCKET** : Le nom du Bucket à utiliser (`main`)
  
### 4. Préparer les services

L'API utilise une base de données PostgreSQL et un service MinIO pour le stockage. Ces services sont gérés avec Podman Compose.

Démarrez les conteneurs et executer les migrations :
```bash
node ace services prepare
```

### 4. Réinitialiser les services

Stopper et démonter les conteneurs
```bash
node ace services reset
```

### 6. Générer la clé d'application

Générez une clé secrète pour l'application :

```bash
node ace generate:key
```

### 7. Démarrer le serveur

Lancez le serveur de développement :

```bash
pnpm dev
```

Le serveur sera accessible sur `http://localhost:3333`.

---

Si vous rencontrez des problèmes, consultez la documentation officielle d'AdonisJS : [AdonisJS Documentation](https://docs.adonisjs.com/).
