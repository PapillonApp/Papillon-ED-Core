<div align="center">
<br>
<br>
<img alt="Logo" src=".github/icon.png" width="100" height="100"/>

# Papillon ED Core

[**Documentation**](DOCUMENTATION.md) • [Licence](#licence) • [Attributions](#attributions) • [NPM]()

Ce module permet la connexion entre l'application Papillon et EcoleDirecte.

</div>


## Informations

Le module est exporté vers NPM, il doit donc respecter les règles de codage de NPM et n'enfreindre aucune règle spécifique de ce service ni de Papillon.

## Roadmap typescript

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
  - [ ] API Response (Waiting for types to be written)
- [x] Typing EDT
  - [x] `fetch/getTimetable.ts`
  - [x] API Response
- [x] Typing SchoolLife
  - [x] `fetch/getSchoolLife.ts`
  - [x] API Response
- [x] Typing Manuals
  - [x] `fetch/getDigitalManuals.ts`
  - [x] API Response
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

## Documentation
Voir le fichier [`DOCUMENTATION.md`](DOCUMENTATION.md)

## Licence

Cette base de code est distribuée par Papillon, sous la licence [CeCill V2.1](LICENSE).

Elle est maintenue et développée par ses contributeurs : [LeMaitre](https://github.com/LeMaitre4523), [LeGeek](https://github.com/LeGeek01), [LucHack](https://github.com/lucas-luchack), [Azgar](https://github.com/azgaresncf), [Yann](https://github.com/yannouuuu), [Diego Finocchiaro](https://github.com/diegofino15) et  [Armand Camponovo](https://github.com/camarm-dev)

## Attributions

- Les types (`src/types`), réadaptés par [Armand Camponovo](https://github.com/camarm-dev/ecoledirecte-api-types), originellement [a2br/ecoledirecte-api-types](https://github.com/a2br/ecoledirecte-api-types): _**_Aucune licence spécifiée_**_
- Certains autres types proviennent de [EduWireApps/ecoledirecte-api-docs](https://github.com/EduWireApps/ecoledirecte-api-docs): _**Aucune licence spécifiée**_
