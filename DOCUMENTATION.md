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

Ce projet est développé en _**Typescript**_, il est compatible avec toutes les technologies **Javascript**.

### Installation

> [!CAUTION]
> Package not published
> The typescript package is not finished yet ! Consider installing it using `npm i git+https://github.com/papillonapp/papillon-ed-core`

```sh
npm i papillon-ed-core
```

### Utilisation

_Ce module utilise des fonctions asynchrones pour fonctionner._

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
ED.setToken('token', userId)
```

**4. Visitez la documentation**

Désormais connectés, il vous faudra lire la [documentation des références]() pour comprendre et utiliser chaque fonctionnalités.

### Références

> [!NOTE]
> Des exemples sont disponibles dans `exemples/`

Les références sont données ainsi:

| Propriété | Type                  | Commentaire |
|-----------|-----------------------|-------------|
| nom       | `undefined \| string` |             |

- Certains types ont des liens hypertextes vers la référence du type.
- Certains liens renvoient vers le fichier de définition du type.
- Le signe _?_ désigne que la valeur peut être non-définie !
- Si la propriété est une fonction, le type est `(arg: type) => type`.
- Si la fonction est `async`, elle renvoie une `Promise<type>`

#### EDcore

La classe principale du module.

| Propriété         | Type                                                                                                                                                                      | Commentaire                         |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| homeworks         | [`GetHomeworks`](#GetHomeworks)                                                                                                                                           | Gestion des devoirs                 |
| grades            | [`GetGrades`](#GetGrades)                                                                                                                                                 | Gestion des notes                   |
| timetable         | [`GetTimetable`](#GetTimetable)                                                                                                                                           | Gestion de l'EDT                    |
| schoolLife        | [`GetSchoolLife`](#GetSchoolLife)                                                                                                                                         | Gestion de la vie scolaire          |
| cantine           | [`GetCantine`](#GetCantine)                                                                                                                                               | Gestion de la cantine               |
| digitalManuals    | [`GetDigitalManuals`](#GetDigitalManuals)                                                                                                                                 | Gestion des manuels numériques      |
| messaging         | [`GetMessaging`](#GetMessaging)                                                                                                                                           | Gestion des messages                |
| timeline          | [`GetTimeline`](#GetTimeline)                                                                                                                                             | Gestion des timeline                |
| documents         | [`GetDocuments`](#GetDocuments)                                                                                                                                           | Gestion des document administratifs |
| forms             | [`GetForms`](#GetForms)                                                                                                                                                   | Gestion des formulaires             |
| workspaces        | [`GetWorkspaces`](#GetWorkspaces)                                                                                                                                         | Gestion des espaces de travail      |
| communicationBook | [`GetCommunicationBook`](#GetCommunicationBook)                                                                                                                           | Gestion du carnet de correspondance |
| cloud             | [`GetCloud`](#GetCloud)                                                                                                                                                   | Gestion du cloud                    |
|                   |                                                                                                                                                                           |                                     |
| auth              | [`Auth`](#Auth)                                                                                                                                                           | Gestion de l'authentification       |
| request           | [`Request`](#Request)                                                                                                                                                     | Gestion du requêtage                |
|                   |                                                                                                                                                                           |                                     |
| _token            | `string` \| `undefined`                                                                                                                                                   | Token                               |
| isLoggedIn        | `boolean`                                                                                                                                                                 | L'utilisateur est-il connecté       |
| settings?         | [`accountParameters`](src/utils/types/accounts.ts#L3) \| `undefined`                                                                                                      | Paramètres de l'utilisateur         |
| student           | [`account`](https://github.com/camarm-dev/ecoledirecte-api-types/blob/main/v3/responses/login/accounts/index.ts#L11) \| [`BlankAccount`](src/utils/types/accounts.ts#L16) | Profil de l'utilisateur             |
| school?           | [`EstablishmentInfo`](src/utils/types/establishments.ts#L1)                                                                                                               | Informations de l'établissement     |
| modules?          | `Array<`[`accountModule`](https://github.com/camarm-dev/ecoledirecte-api-types/blob/main/v3/responses/login/accounts/index.ts#L19))`>`                                    | Modules activés                     |

_Ouvrir [`src/session.ts`](src/session.ts)_

### GetHomeworks

La classe de gestion des devoirs.

| Propriété  | Type                                                                                                                                              | Commentaire                                                        |
|------------|---------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
| fetch()    | `async () =>`[`textbookRes`](https://github.com/camarm-dev/ecoledirecte-api-types/blob/main/v3/responses/students/textbook.ts#L5)                 | Récupérer les devoirs                                              |
| getByDay() | `async (day: string) =>`[`textbookResData`](https://github.com/camarm-dev/ecoledirecte-api-types/blob/main/v3/responses/students/textbook.ts#L14) | Récupérer les devoirs du jout `day` (day est formaté `YYYY-MM-DD`) |

_Ouvrir [`src/fetch/getHomeworks.ts`](src/fetch/getHomeworks.ts)_

#### GetGrades

La classe de gestion des notes.

| Propriété | Type                                                                                                                               | Commentaire         |
|-----------|------------------------------------------------------------------------------------------------------------------------------------|---------------------|
| fetch()   | `async () =>`[`gradesResData`](https://github.com/camarm-dev/ecoledirecte-api-types/blob/main/v3/responses/students/grades.ts#L37) | Récupérer les notes |

_Ouvrir [`src/fetch/getGrades.ts`](src/fetch/getGrades.ts)_


#### GetTimetable

La classe de gestion de l'EDT. Les jours sont formatés `YYYY-MM-DD`.

| Propriété     | Type                                                                                                     | Commentaire                                      |
|---------------|----------------------------------------------------------------------------------------------------------|--------------------------------------------------|
| fetchByDay()  | `async (day: string) =>`[`timetableCourseList`](src/utils/types/timetable.ts#L3)                         | Récupérer l'EDT du jour `day`                    |
| fetchByDate() | `async (starteDate: string, endDate: string) =>`[`timetableCourseList`](src/utils/types/timetable.ts#L3) | Récupérer l'EDT des jour `startDate` à `endDate` |

_Ouvrir [`src/fetch/getTimetable.ts`](src/fetch/getTimetable.ts)_


#### GetSchoolLife

La classe de gestion de la vie scolaire

| Propriété | Type                                                                                                                                  | Commentaire                                   |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|
| fetch()   | `async () =>`[`schoolLifeRes`](https://github.com/camarm-dev/ecoledirecte-api-types/blob/main/v3/responses/students/schoolLife.ts#L5) | Récupérer tous les évenements de vie scolaire |

_Ouvrir [`src/fetch/getSchoolLife.ts`](src/fetch/getSchoolLife.ts)_


#### GetCantine

La classe de gestion des modules de cantine.

| Propriété         | Type                                                                                                                                                       | Commentaire                                  |
|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------|
| getBarcode()      | `() => string`                                                                                                                                             | Renvoie la valeur du code-barre du badge     |
| getReservations() | `() =>` [`modStudReservations.params`](https://github.com/camarm-dev/ecoledirecte-api-types/blob/main/v3/responses/login/accounts/student/modules.ts#L179) | Renvoie les paramètres module de réservation |

_Ouvrir [`src/fetch/getSchoolLife.ts`](src/fetch/getSchoolLife.ts)_


#### GetDigitalManuals

La classe de gestion des manuels scolaires.

| Propriété | Type                                                                                                                             | Commentaire                     |
|-----------|----------------------------------------------------------------------------------------------------------------------------------|---------------------------------|
| fetch()   | `async () =>` [`manualsRes`](https://github.com/camarm-dev/ecoledirecte-api-types/blob/main/v3/responses/students/manuals.ts#L5) | Récupérer les manuels scolaires |

_Ouvrir [`src/fetch/getDigitalManuals.ts`](src/fetch/getDigitalManuals.ts)_


#### GetMessaging

La classe de gestion de la messagerie.

| Propriété               | Type                                                                                                                                | Commentaire                                                                           |
|-------------------------|-------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| fetchReceivedMessages() | `async () =>` [`mailboxResData`](https://github.com/camarm-dev/ecoledirecte-api-types/blob/main/v3/responses/global/mailbox.ts#L13) | Récupérer les messages reçus (`data.messages.received` sera rempli, les autres vides) |
| fetchSentMessages()     | `async () =>` [`mailboxResData`](https://github.com/camarm-dev/ecoledirecte-api-types/blob/main/v3/responses/global/mailbox.ts#L13) | Récupérer les messages envoyés (`data.messages.sent` sera rempli, les autres vides)   |

_Ouvrir [`src/fetch/getMessaging.ts`](src/fetch/getMessaging.ts)_


#### GetTimeline

La classe de gestion des timeline.

| Propriété             | Type                                                                                                                                        | Commentaire                        |
|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------|
| fetch()               | `async () => Array<`[`studTlElem`](https://github.com/camarm-dev/ecoledirecte-api-types/blob/main/v3/responses/students/timeline.ts#L13)`>` | Récupérer la timeline personnelle. |
| fetchCommonTimeline() | `async () =>` [`studCommonTlResData`](https://github.com/camarm-dev/ecoledirecte-api-types/blob/main/v3/responses/students/timeline.ts#L34) | Récupérer la timeline commune      |

_Ouvrir [`src/fetch/getTimeline.ts`](src/fetch/getTimeline.ts)_


#### GetDocuments

La classe de gestion des documents administratifs.
> [!CAUTION]
> Non testé, si vous pouvez tester, merci de nous contacter

| Propriété | Type                                                                                                                                                      | Commentaire                                                                                            |
|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| fetch()   | `async (archive: string) =>`[`studentDocsResData`](https://github.com/camarm-dev/ecoledirecte-api-types/blob/main/v3/responses/students/documents.ts#L13) | Récupérer les documents administratifs. `archive` est une année scolaire `YYYY-YYY` (eg. `2023-2024`). |

_Ouvrir [`src/fetch/getDocuments.ts`](src/fetch/getDocuments.ts)_


#### GetForms

La classe de gestion des formulaires.
> [!CAUTION]
> Non testé, si vous pouvez tester, merci de nous contacter

| Propriété | Type                                                                                                                                            | Commentaire                                                                                        |
|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| fetch()   | `async (annee: string) => Array<`[`form`](https://github.com/camarm-dev/ecoledirecte-api-types/blob/main/v3/responses/students/forms.ts#L14)`>` | Récupérer les formulaires de l'année. `annee` est une année scolaire `YYYY-YYY` (eg. `2023-2024`). |

_Ouvrir [`src/fetch/getForms.ts`](src/fetch/getForms.ts)_


#### GetWorkspaces

La classe de gestion des espaces de travail.
> [!CAUTION]
> Non testé, si vous pouvez tester, merci de nous contacter

| Propriété | Type                                                                                                                                                                                                                                                 | Commentaire                                            |
|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| fetch()   | `async () => Array<`[`workspace`](https://github.com/camarm-dev/ecoledirecte-api-types/blob/main/v3/responses/students/workspaces.ts#L23)`>`                                                                                                         | Récupérer les espaces de travail.                      |
| get()     | `async (id: string) =>`[`workspace`](https://github.com/camarm-dev/ecoledirecte-api-types/blob/main/v3/responses/students/workspaces.ts#L23)                                                                                                         | Récupérer l'espace de travail avec l'identifiant `id`. |
| join()    | `async (espace: `[`workspace`](https://github.com/camarm-dev/ecoledirecte-api-types/blob/main/v3/responses/students/workspaces.ts#L23)`) =>`[`emptyRes`](https://github.com/camarm-dev/ecoledirecte-api-types/blob/main/v3/responses/failure.ts#L11) | Rejoindre l'espace de travail `espace`.                |
| leave()   | `async (espace: number) =>`[`emptyRes`](https://github.com/camarm-dev/ecoledirecte-api-types/blob/main/v3/responses/failure.ts#L11)                                                                                                                  | Quitte l'espace de travail avec l'identifiant `id`.    |

_Ouvrir [`src/fetch/getWorkspaces.ts`](src/fetch/getWorkspaces.ts)_


#### GetCommunicationBook

La classe de gestion du carnet de liaison.
> [!CAUTION]
> Non testé, si vous pouvez tester, merci de nous contacter

| Propriété | Type                                                                                                                                                               | Commentaire                                    |
|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|
| fetch()   | `async () => Array<`[`communicationBookResData`](https://github.com/camarm-dev/ecoledirecte-api-types/blob/main/v3/responses/students/communicationBook.ts#L13)`>` | Récupérer les évenements do carnet de liaison. |

_Ouvrir [`src/fetch/getCommunicationBook.ts`](src/fetch/getCommunicationBook.ts)_


#### GetCloud

La classe de gestion du cloud.
> [!CAUTION]
> Non testé, si vous pouvez tester, merci de nous contacter

| Propriété | Type                                                                                                                                       | Commentaire                      |
|-----------|--------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------|
| fetch()   | `async () => Array<`[`cloudResFolder`](https://github.com/camarm-dev/ecoledirecte-api-types/blob/main/v3/responses/global/cloud.ts#L13)`>` | Récupérer les fichiers du cloud. |

_Ouvrir [`src/fetch/getCloud.ts`](src/fetch/getCloud.ts)_


#### Auth

La classe de gestion de l'authentification et de l'utilisateur.

| Propriété        | Type                                                                | Commentaire                                      |
|------------------|---------------------------------------------------------------------|--------------------------------------------------|
| login()          | `async (username: string, password: string) => void`                | Se connecte à Ecoledirecte avec des identifiants |
| setToken()       | `(token: string, id: number) => boolean`                            | Se connecte à Ecoledirecte avec un token         |
| getEtabInfo()    | `() =>` [`EstablishmentInfo`](src/utils/types/establishments.ts#L1) | Récupérer les informations de l'établissement    |
| getStudentInfo() | `() =>` [`AccountInfo`](src/utils/types/accounts.ts#L20)            | Récupérer les informations du compte             |

_Ouvrir [`src/auth.ts`](src/auth.ts)_


#### Request

La classe de gestion des requêtes.

| Propriété        | Type                                        | Commentaire                                                        |
|------------------|---------------------------------------------|--------------------------------------------------------------------|
| post()           | `async (url: string, body: string) => void` | Exécute la requête à l'API ecoledirect (path: `url`, body: `body`) |

_Ouvrir [`src/Request.ts`](src/Request.ts)_

---

## Guide du développeur

Ce guide vous permet de comprendre comment ce module est développé et donc d'y contribuer !

Ce projet est développé en _**Typescript**_. Vous devez maitriser ce languages ainsi que le développement de modules _NodeJs_ pour commencer.

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

**3. Récupérer les submodules**
```shell
git submodule update --init --recursive
```

> [!NOTE]
> Pour mettre à jour le submodule, exécutez 
> ```shell
> cd src/types && git pull
> ```

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

Les fichiers transpilés sont généré à leur emplacement. Ce script _lint_ et _build_ la base de code.
```shell
npm run build
```
