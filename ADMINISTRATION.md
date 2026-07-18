# Administration de La Salle 9

Le panneau d’administration est disponible à l’adresse suivante une fois GitHub Pages déployé :

`https://arnocollet.github.io/La-salle-9-augmented/admin.html`

Il permet d’ajouter une activité sans modifier manuellement les pages HTML :

- choix de la classe ;
- titre et icône ;
- dépôt d’un fichier PDF de 20 Mo maximum ou saisie d’un lien PDF ;
- saisie du lien d’un projet Scratch public ;
- publication directe dans le dépôt GitHub ;
- masquage et réactivation des activités ajoutées.

## Première connexion

1. Ouvrir les [paramètres des jetons GitHub](https://github.com/settings/personal-access-tokens/new).
2. Créer un jeton **Fine-grained personal access token**.
3. Choisir une date d’expiration adaptée.
4. Dans **Repository access**, sélectionner uniquement `La-salle-9-augmented`.
5. Dans **Repository permissions**, attribuer **Contents: Read and write**.
6. Créer le jeton puis le coller dans le panneau d’administration.

Le jeton est mémorisé dans le stockage local du navigateur si l’option correspondante reste cochée. Il n’est jamais enregistré dans le dépôt ni envoyé à un service autre que l’API GitHub.

> Ne pas utiliser le panneau sur un ordinateur partagé. Utiliser le bouton **Déconnexion** pour effacer le jeton de l’appareil.

## Fonctionnement

Les nouvelles activités sont décrites dans `data/activities.json`. Les PDF déposés sont enregistrés dans `assets/pdfs/`. Chaque publication effectuée depuis le panneau crée automatiquement un commit sur la branche `main`.

GitHub Pages met généralement quelques instants à publier le nouveau commit. Si une activité n’apparaît pas immédiatement, patienter une à deux minutes puis actualiser la page de la classe avec `Ctrl + F5`.

Les activités présentes historiquement dans les fichiers HTML restent inchangées. Le bouton **Masquer** concerne uniquement les activités ajoutées depuis le panneau.
