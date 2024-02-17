# Papillon ED Core - Documentation

## Sommaire
- [Guide de l'utilisateur](#guide-de-lutilisateur)
  - [Installation](#installation)
  - [Utilisation](#utilisation)
  - [Références](#références)
- [Guide du développeur](#guide-du-développeur)
  - [Installation](#installation-1)
  - [Structure](#structure)
  - [Scripts](#scripts)


## Guide de l'utilisateur

Ce guide vous permet de comprendre comment fonctionne ce module et comment vous pouvez l'utiliser.

### Installation

> [!ERROR]
> Package not published
> The typescript package is not finished yet !

```sh
npm i papillon-ed-core
```

### Utilisation

**1. Importer le module**
```typescript
import {EDCore} from "papillon-ed-core";
```
**2. Initialiser le module**
```typescript
const ED = new EDCore()
```

**3. S'authentifier, par token ou identifiants**

_Avec ses identifiants_
```typescript
await ED.login("username", "password")
```

_Avec un token_
> [!WARNING]
> S'authentifier par token empêchera `papillon-ed-core` de se reconnecter à votre compte, ce qui entrainera une erreur après expiration du token.
```typescript
const userId = 0000
await ED.setToken('token', userId)
```

**4. Visitez la documentation**

Désormais connectés, il vous faudra lire la [documentation des références]() pour comprendre et utiliser chaque fonctionnalités.

### Références

## Guide du développeur

Ce guide vous permet de comprendre comment ce module est développé et donc d'y contribuer !

### Installation

> [!NOTE]
> Si vous souhaitez contribuer ou modifier le code, veuillez _fork_ le dépot et cloner votre copie de celui-ci.

**1. Cloner ce dépôt**
```shell
git clone https://github.com/PapillonApp/Papillon-ED-Core
```

**2. Installer les dépendances**
```shell
npm install
```
Et voilà, vous êtes prêts !

### Structure

Le module est structuré de la manière suivante :
- `src/fetch` : Contient les fonctions de récupération des données de l'API d'EcoleDirecte
- `src/session.ts` : Contient les fonctions de gestion de la session
- `src/auth.ts` : Contient les fonctions d'authentification
- `src/errors.ts` : Contient les erreurs pouvant être retournées par le module. *Les erreurs doivent suivre la même structure pour chaque module.*
- `src/types`: Submodule git des types des réponses ED. (réadaptation de [Armand CAMPONOVO](https:/github.com/camarm-dev), travail original [ab2r](https://github.com/ab2r))
- `src/utils/types`: Contient les types des `data` requêtes, et des types utiles à ce module.

### Scripts

**Linter: eslint**
```shell
npm run lint
```
_Vous pouvez aussi exécuter `npm run lint:fix` pour régler les problèmes de formatage automatiquement._

**Build: tsc**

Les fichiers transpilés sont contenus dans `dist/`. Ce script _lint_ et _build_ la base de code.
```shell
npm run build
```
