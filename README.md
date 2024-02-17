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
> - Les types sont majoritairement issus de [a2br/ecoledirecte-api-types](https://github.com/a2br/ecoledirecte-api-types), une base de code sous licence [??]()
> - Certains autres sont copiés depuis [EduWireApps/ecoledirecte-api-docs](https://github.com/EduWireApps/ecoledirecte-api-docs), une documentation sous license **_Pas de licence_**, attributions à **Ab2r** 

- [x] Core typing
  - [x] `session.ts`
  - [x] `auth.ts`
  - [x] `constants.ts`
  - [x] `errors.ts`
  - [x] `Request.ts`
- [x] Typing Grades
  - [x] `fetch/getGrades.ts`
  - [x] API Response
- [x] Typing Account
  - [x] `auth.ts`
  - [x] API Response
- [x] Typing Homeworks
  - [x] `fetch/getHomeworks.ts`
  - [x] API Response
- [x] Typing Messaging 
  - [x] `fetch/getMessaging.ts`
  - [x] API Response
- [x] Typing EDT
  - [x] `fetch/getTimetable.ts`
  - [x] API Response
- [ ] Typing SchoolLife
  - [x] `fetch/getSchoolLife.ts`
  - [ ] API Response (Waiting for types to be written)
- [ ] Typing Manuals
  - [x] `fetch/getDigitalManuals.ts`
  - [ ] API Response (Waiting for types to be written)
- [ ] Typing Cantine
  - [x] `fetch/getCantine.ts`
  - [ ] API Response (Waiting for types to be written)

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

> [!INFO]
> Les types utilisés proviennent de [a2br/ecoledirecte-api-types](https://github.com/a2br/ecoledirecte-api-types), sont contenus dans `src/types/v3`

### Scructure

- `src/types`: Submodule git des types de ab2r. Contient les types des réponses ED.
- `src/utils/types`: Contient les types des `data` requêtes, et des types utiles à ce module.

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

- This script lint and builds the typescript files to javascript and `.d.ts` files, in `dist/`.
- A minified file is available at `dist/index.mjs`.
```shell
npm run build
```

