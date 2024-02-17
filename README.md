# Module Papillon
## Papillon-ED-Core

**Ce module permet la connexion entre l'application Papillon et EcoleDirecte.**

## Informations

Le module est exporté vers NPM, il doit donc respecter les règles de codage de NPM et n'enfreindre aucune règle spécifique de ce service ni de Papillon.

### Structure

Le module est structuré de la manière suivante :
- `src/fetch` : Contient les fonctions de récupération des données de l'API d'EcoleDirecte
- `src/session.js` : Contient les fonctions de gestion de la session
- `src/auth.js` : Contient les fonctions d'authentification
- `src/errors.js` : Contient les erreurs pouvant être retournées par le module. *Les erreurs doivent suivre la même structure pour chaque module.*

## Roadmap typescript
> [!IMPORTANT]
> Les types sont majoritairement issus de [a2br/ecoledirecte-api-types](https://github.com/a2br/ecoledirecte-api-types), une base de code sous licence []() 
> Certains autres sont copiés depuis [EduWireApps/ecoledirecte-api-docs](https://github.com/EduWireApps/ecoledirecte-api-docs), une documentation sous license []() 

- [x] Core typing
- [x] Typing Grades
- [x] Typing Account
- [x] Typing Homeworks
- [ ] Typing Messaging 
- [ ] Typing EDT
- [ ] Typing SchoolLife
- [ ] Typing Manuals
- [ ] Typing Cantine

## Roadmap
- [x] Connexion
- [x] Notes
- [x] Emploi du temps
- [ ] Devoirs
  - [x] Liste des devoirs
  - [x] Devoirs par date
  - [x] Marquer un devoir comme fait
- [x] Manuels Scolaires
- [x] Vie scolaire 
- [ ] Messagerie
  - [x] Liste des messages reçus
  - [x] Contenu des messages reçus
  - [x] Liste des messages envoyés
  - [x] Contenu des messages envoyés
  - [ ] Envoi de message
  
## Utilisation

### Connexion par idenfitiants
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
.catch(err => { //en cas d'erreur à la connexion
    console.log(err)
})
```

### Connexion par token (déjà généré auparavant)
```javascript
const ED = require("papillon-ed-core");
let ed = new ED();

let userID = 0000;
ed.auth.setToken("token", userID)

//La suite du code
```
> **Warning**
> Si le token donné est invalide, le module ne pourra pas en générer un nouveau (par manque d'identifiants) et donnera une erreur de token invalide/expiré

## Documentation
Voir le fichier `DOCUMENTATION.md`

## Typescript

> [!WARNING]
> Les types utilisés proviennent de [a2br/ecoledirecte-api-types](https://github.com/a2br/ecoledirecte-api-types), sont contenus dans `src/types/v3`

### Eslint

- Lint code

```shell
npm run lint
```

- Lint and fix

```shell
npm run lint:fix
```

### Build

- This script lint and builds the typescript files to javascript files.
```shell
npm run build
```

