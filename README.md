## Module Papillon
### Papillon-ED-Core
---

**Ce module permet la connexion entre l'application Papillon et EcoleDirecte.**

## Informations

Le module est exporté vers NPM, il doit donc respecter les règles de codage de NPM et n'enfreindre aucune règle spécifique de ce service ni de Papillon.

### Structure

Le module est de la manière suivante :
- `src/fetch` : Contient les fonctions de récupération des données de l'API d'EcoleDirecte
- `src/session.js` : Contient les fonctions de gestion de la session
- `src/auth.js` : Contient les fonctions d'authentification
- `src/errors.js` : Contient les erreurs pouvant être retournées par le module. *Les erreurs doivent suivre la même structure pour chaque module.*
  
## Utilisation

Pour se connecter avec des identifiants
```javascript
const ED = require("papillon-ed-core");
let ed = new ED();

ed.auth.login("username", "password").then(() => {
    let token = ed._token;
    let prenom = ed.student.prenom

    ed.homeworks.fetch().then(homeworks => {
        //Traitement des devoirs
    })
})
```

Pour se connecter avec un token
```javascript
const ED = require("papillon-ed-core");
let ed = new ED();

let userID = 0000;
ed.auth.setToken("token", userID)

//La suite du code
```

