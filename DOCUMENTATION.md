# Papillon ED Core - Documentation

## Sommaire
0 - Installation

1 - Initialisation

1.1 - Importation du module

1.2 - Authentification

1.2.1 - Authentification via identifiants

1.2.2 - Authentification via token

2 - Utilisation


## 0 - Installation
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
```javascript
const ED = require("Papillon-ED-Core")
```

### 1.2 - Authentification
L'étape suivante consiste à se connecter avec un compte EcoleDirecte existant.
Pour cela, deux moyens :

**1.2.1 - Authentification via identifiants**
```javascript
const ED = require("Papillon-ED-Core")
ED.auth.login("identifiant", "mot de passe").then(() => {
    let token = ed._token;
    let prenom = ed.student.prenom

    ed.homeworks.fetch().then(homeworks => {
        //Traitement des devoirs
    })
    // ...
})
.catch(err => { //en cas d'erreur à la connexion
    console.log(err)
})
```

**1.2.2 - Authentification par token déjà généré**
```javascript
const ED = require("Papillon-ED-Core")
let ed = new ED()

ed.auth.setToken("token", userID)

//La suite du code
```

## 2 - Utilisation (fonctions basiques)
Maintenant que le module est connecté, on peut l'utiliser.

> **Note**
> Dans les exemples de scripts suivants, on supposera que la variable `ed` contient le constructor du module connecté tel que présenté ci-dessus
> Ou, si vous préférez :
> ```javascript
> const ED = require("papillon-ed-core")
> let ed = new ED()
> // vient ensuite le script de connexion
> ```

### 2.1 - Récupérer le cahier de textes
