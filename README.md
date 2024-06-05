# API de Gestion de Blagues

Une API pour gérer des blagues Carembar, construite avec Node.js, Express, et Sequelize.

## Installation

1. **Clonez le dépôt :**

   ```bash
   git clone <URL_DU_DÉPÔT>
   cd <NOM_DU_RÉPÔT>
   ```

2. **Installez les dépendances :**

   ```bash
   npm install
   ```

3. **Démarrez le serveur :**
   ```bash
   npm start
   ```

## Utilisation

- **Racine API :** `GET /api/v1/`
- **Créer une blague :** `POST /api/v1/blagues`
- **Lister les blagues :** `GET /api/v1/blagues`
- **Obtenir une blague par ID :** `GET /api/v1/blagues/:id`
- **Obtenir une blague aléatoire :** `GET /api/v1/blagues/random`

## Documentation Swagger

Accédez à la documentation Swagger en local à l'adresse suivante : [http://localhost:3000/documentationSwagger](http://localhost:3000/documentationSwagger)
