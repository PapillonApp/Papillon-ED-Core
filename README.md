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

> [!TIP]
> **Bienvenue sur ce dépôt !** 
> Nous sommes à la recherche d'utilisateur d'EcoleDirecte qui pourraient tester certaines fonctionnalités.

## Roadmap
- [x] Connexion
- [x] Notes
- [x] Emploi du temps
- [ ] Devoirs
  - [x] Liste des devoirs
  - [x] Devoirs par date
  - [x] Marquer un devoir comme fait
  - [ ] Contenu des cours
- [x] Manuels Scolaires
- [x] Vie scolaire 
- [ ] Messagerie
  - [x] Liste des messages reçus
  - [x] Contenu des messages reçus
  - [x] Liste des messages envoyés
  - [x] Contenu des messages envoyés
  - [ ] Envoi de message
- [ ] Vie de la classe
- [ ] QCM
- [ ] Formulaires
  - [x] Lister les formulaires
  - [ ] Répondre aux formulaires
- [ ] Sondages
- [ ] Carnet de correspondance
- [x] Documents
- [ ] Espace de travail
  - [x] Lister 
  - [ ] Rejoindre (pas testé) 
  - [ ] Quitter (pas testé)
  - [x] Agenda
  - [x] Lister les discussions
  - [ ] Cloud
  - [x] Lister les membres
- [ ] Cloud
- [x] Téléchargement de fichiers (`/telechargement.awp`)
- [x] Commandes

## Documentation
Voir le fichier [`DOCUMENTATION.md`](DOCUMENTATION.md)

## Licence

Cette base de code est distribuée par Papillon, sous la licence [**GPLv3**](LICENSE).

```text
papillon-ed-core  Copyright (C) 2024  Vince Linise <contact@getpapillon.xyz> et les contributeurs.
This program comes with ABSOLUTELY NO WARRANTY; see license for details.
This is free software, and you are welcome to redistribute it
under certain conditions; see license for details.
```

Elle est maintenue et développée par ses contributeurs : [LeMaitre](https://github.com/LeMaitre4523), [LeGeek](https://github.com/LeGeek01), [LucHack](https://github.com/lucas-luchack), [Azgar](https://github.com/azgaresncf), [Yann](https://github.com/yannouuuu), [Diego Finocchiaro](https://github.com/diegofino15) et  [Armand Camponovo](https://github.com/camarm-dev)

## Remerciements

La création de ce module est rendue possible en partie grâce à la documentation de [MaitreRouge](https://github.com/MaitreRouge) ([ici](https://github.com/EduWireApps/ecoledirecte-api-docs)). 

Nous remercions aussi les personnes suivantes qui ont testé le module et permis l'intégration de nouvelles fonctionnalités :
- [Azgar (@azgaresncf)](https://github.com/azgaresncf)  

## Attributions

- Les types (`src/types`), réadaptés par [Armand Camponovo](https://github.com/camarm-dev/ecoledirecte-api-types), originellement [a2br/ecoledirecte-api-types](https://github.com/a2br/ecoledirecte-api-types) par [Anatole Debierre](https://github.com/a2br): licence [ISC](https://github.com/camarm-dev/ecoledirecte-api-types/blob/main/LICENSE)
- Certains autres types proviennent de [EduWireApps/ecoledirecte-api-docs](https://github.com/EduWireApps/ecoledirecte-api-docs), par [MaitreRouge](https://github.com/MaitreRouge): **Aucune licence spécifiée**

## Release

> [!CAUTION]
> Avant chaque release, mettre à jour `version` dans `package.json` et les champs `version` et `date-released` dans `citation.cff`
