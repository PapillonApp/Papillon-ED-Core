## Versions

- (**1.0.3**: abandonnée: pas de sens de ce système de version.)
- **0.1.0**: Projet initial en **javascript**
- **0.2.0**: Réécriture en **typescript**
- **1.0.0**: Quand le module sera stable

## 0.2.9
- Hotfix: Utilisation de la libraire `buffer` pour la compatibilité react native

## 0.2.8
- Prise en charge de la **double authentification**
  - Avec ajout des types
- Réécriture de `Request.ts` pour une meilleure gestion et flexibilité des requêtes vers Ecoledirecte
- Amélioration de l'exemple `login.ts`: 2FA et interface agréable
  - Ajout de `ora` et `enquirer` aux dépendances de développement
- Ajout de `getProfilePictureBase64` dans `getDownloads.ts` pour télécharger la photo de profil en base64
- Mise à jour de la documentation en conséquences

## 0.2.7
- Conversion des dates de la vie-scolaire renvoyé par ED (Merci Rémy)
- Fix de la réponse de l'EDT
- Ajout des erreurs A2F_ERROR et ACCOUNT_DISABLED en vue du nouveau système de QCM

## 0.2.6

- Ajout de la propriété `_accessToken` dans le fichier Session

## 0.2.5

- Ajout de la fonction `getFileBase64()` pour récupérer un fichier en base64
  - Ajout de `getBase64()` dans la classe `Menu` 

## 0.2.4

- Ajout des téléchargements
- Ajout des commandes
- Support de nouvelles erreurs
- Meilleur support du token permanent

## 0.2.3

- Erreur `526`
- POC commandes
- Module Esidoc

## 0.2.2

- NPM organisation configured
- Added permanent token support (`renewToken()`)

## 0.2.1

- Reconfiguration du `tsconfig.json` pour build correctement et publier sur **NPM**
