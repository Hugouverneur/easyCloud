# ☁ EasyCloud

Projet réalisé dans le cadre du Projet Inter Matière (PIM) de l'Estiam en 2022.

Notre objectif est de rendre la création d'intance dans le cloud le plus simple possible.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.3.

## Structure de l'application
- [Models](#models)
- [Services](#services)
- [Composants](#composants)

### Models
Nos Modèles de données sont définis dans ```src/app/models```.

Model Instance :

- **vmName** string *required*
- **ram** number *required*
- **ramUnity** string *required*
- **storage** number *required*
- **storageUnity** string *required*
- **processor** number *required*
- **os** string *required*
- **virtualizationServer** string *required*
- **uid** any
- **vmId** any
- **serverId** any

### Services
Les services sont placés dans ```src/app/services```.
Auth-guard permet de gérer les autorisations d'accée à certaines routes.

**Auth** gère l'authentification avec Firebase Authentication.

**Instance** concerne le traitement des instances, notamment en communiquant avec la base de données Firebase Realtime Database.

**Powershell** se connecte au serveur NodeJS pour exécuter toutes les commandes Powershell. Le gitHub du serveur est disponible ici 👉 [EasyCloudBackend](https://github.com/Hugouverneur/easyCloudBackend)

### Composants
Tous les comopsants sont regroupés dans ```src/app/components```.
Nous retrouvons un composant par page et deux composants globaux pour le header et le footer.

## Installation du projet Angular

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
