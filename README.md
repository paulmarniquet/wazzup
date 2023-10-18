# Wazzup

---

## Projet

L'objectif de **Wazzup** est d'automatiser au maximum la veille en récupérant des articles liés à un sujet spécifique depuis (pour l'instant) le blog Medium, grâce à une API non-officielle. Ces articles sont ensuite envoyés à notre page de veille sur Notion via l'API Notion, permettant ainsi de rester à jour sur les dernières publications dans un domaine donné.


https://github.com/paulmarniquet/wazzup/assets/72015483/d5291203-a581-461e-b6b5-85eee7011ac3


## Technologies

- **NuxtJS**: Framework basé sur Vue.js pour la création d'applications web modernes et performantes.

- **Express**: Framework pour construire des applications web avec Node.js.

- **API Medium (non-officielle)**: L'API non-officielle de Medium permet de récupérer des articles en fonction des sujets recherchés. 
Pour en savoir plus : (https://rapidapi.com/nishujain199719-vgIfuFHZxVZ/api/medium2/)

- **API Notion**: Permet d'interagir avec Notion et d'ajouter des données à votre page de veille.

## Installation

### Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants sur votre machine :

- Node.js (https://nodejs.org/)
- npm (géré automatiquement avec l'installation de Node.js)

### Étapes d'installation

1. **Clonage du répertoire**

   Clonez le répertoire du projet depuis votre terminal :

   ```bash
   git clone https://github.com/paulmarniquet/wazzup
   ```

2. **Installation des dépendances**

   Naviguez vers le répertoire du projet et installez les dépendances avec npm :

   ```bash
   cd wazzup
   npm install
   ```

3. **Configuration des variables d'environnement**

   Créez un fichier `.env` à la racine du projet et ajoutez les informations suivantes :

   ```
   MEDIUM_TOKEN=VOTRE_TOKEN_MEDIUM
   NOTION_TOKEN=VOTRE_TOKEN_NOTION
   NOTION_DATABASE=ID_DE_VOTRE_BASE_DE_DONNÉES_NOTION
   ```

   Remplacez `VOTRE_TOKEN_MEDIUM` et `VOTRE_TOKEN_NOTION` par vos propres jetons d'API Medium et Notion, ainsi que `ID_DE_VOTRE_BASE_DE_DONNÉES_NOTION` par l'identifiant de la base de données Notion.
<br><br>
   Pour obtenir votre jeton d'API Medium, rendez-vous sur la page de l'API non-officielle de Medium (https://rapidapi.com/nishujain199719-vgIfuFHZxVZ/api/medium2/) et cliquez sur le bouton `Connect to API`. Vous devrez vous connecter à votre compte RapidAPI ou en créer un si vous n'en avez pas. Une fois connecté, vous devrez vous abonner à l'API et enfin vous devriez voir votre jeton d'API Medium dans la section `Code Snippets`.
<br><br>
4. **Démarrage du front**

   Lancez le front en exécutant la commande suivante :

   ```bash
   npm run dev
   ```

   Le projet sera accessible à l'adresse `http://localhost:3000`.
<br><br>
5. **Démarrage du serveur**

    Lancez le serveur en exécutant la commande suivante :
    
    ```bash
    cd server
   node server.js
    ```

---

## Version

Cette version de Wazzup représente une première itération du projet. Vous pouvez l'utiliser comme point de départ et envisager d'ajouter des fonctionnalités supplémentaires ou d'améliorer l'interface utilisateur à l'avenir.

---

Si vous avez des questions ou des suggestions d'amélioration, n'hésitez pas à les partager. Bonne veille !

* **Paul Marniquet** _alias_ [@paulmarniquet](https://github.com/paulmarniquet)
