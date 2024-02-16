# Papillon ED Core - Documentation

## Sommaire
- [0 - Installation](#0---installation)
- [1 - Initialisation](#1---initialisation)
  - [1.1 - Importation du module](#11---importation-du-module)
  - [1.2 - Authentification](#12---authentification)
- [2 - Utilisation](#2---utilisation-fonctions-basiques)


## 0 - Installation

> [!ERROR] Package not published
> The typescript package is not finished yet !

```sh
npm i papillon-ed-core
```
> **Note**
> Vous pouvez installer une version spécifique du module via la commande suivante :
```sh
npm i papillon-ed-core@<version>
```

## 1 - Initialisation
### 1.1 - Importation du module
Avant de pouvoir utiliser le module, il faut l'importer.
```typescript
import { EDCore } from "papillon-ed-core"
```

### 1.2 - Authentification
L'étape suivante consiste à se connecter avec un compte EcoleDirecte existant.
Pour cela, deux moyens :

**1.2.1 - Authentification via identifiants**
```typescript
import { EDCore } from "papillon-ed-core"

const Factory = new EDCore()

Factory.auth.login("identifiant", "mot de passe").then(() => {
    let token = Factory._token;
    let prenom = Factory.student.prenom

    Factory.homeworks.fetch().then(homeworks => {
        // Traitement des devoirs
    })
    // ...
})
.catch(err => { // En cas d'erreur à la connexion
    console.log(err)
})
```

**1.2.2 - Authentification par token déjà généré**
```typescript
const ED = require("Papillon-ED-Core")
const Factory = new EDCore()

Factory.auth.setToken("token", userID)

// La suite du code
```

## 2 - Utilisation (fonctions basiques)
Maintenant que le module est connecté, on peut l'utiliser.

> **Note**
> Dans les exemples de scripts suivants, on supposera que la variable `Factory` contient le constructor du module connecté tel que présenté ci-dessus
> 
> Ou, si vous préférez :
> ```javascript
> import { EDCore } from "papillon-ed-core"
> const Factory = new EDCore()
> // vient ensuite le script de connexion
> ```

### 2.1 - Récupérer le cahier de textes
