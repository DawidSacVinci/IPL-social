# IPL social - DevOps Exam
- **Nom :** Sac
- **Prénom :** Dawod
- **Email :** dawid.sac@student.vinci.be

## Accès au Code

**URL du Repository GitHub :** https://github.com/DawidSacVinci/IPL-social

## Description du Projet

Ce projet met en place un environnement d'Intégration Continue (CI) pour le module "IPL social".

Il implémente une fonctionnalité de **validation d'adresse email** en TypeScript. Conformément aux consignes de l'examen :

1.  **Méthodologie TDD :** Le développement a été réalisé en suivant strictement le cycle _Red-Green-Refactor_ (visible dans l'historique des commits).
2.  **Logique Algorithmique :** La validation est effectuée sans utiliser d'expressions régulières (Regex) ni de validateurs préconçus.
3.  **Pipeline CI :** Une Github Action est configurée pour lancer automatiquement les tests à chaque `push` et `pull request`.

## Installation et Tests

Pour installer les dépendances du projet :

```bash
npm install
```

Pour lancer l'exécution des tests (commande requise) :

```bash
npm test
```

Ou automatiquement via **GitHub Actions** lors d'un **Push** ou d'une **Pull Request**.

## Dépendances Techniques

Le projet repose sur les outils suivants pour garantir la qualité et l'exécution du code :

- **TypeScript :**
- **Jest :** Framework de test choisi pour implémenter l'approche TDD.
