# ITS GRAVY : serveur

Cette documentation fournit une vue d'ensemble du backend de l'application, y compris ses fonctionnalités, ses endpoints et ses dépendances.

### Voir le projet : [ici](https://itsgravy.onrender.com/)

## Architecture

Le backend de l'application suit une architecture RESTful pour gérer les requêtes HTTP et interagir avec la base de données.

## Routes API

### POST /api/contacts

Cette route permet recevoir les formulaire de contact :

```
{
  "prenom": "John",
  "nom": "Doe",
  "email": "john.doe@example.com",
  "entreprise": "Example Inc.",
  "sujet": "Demande d'information",
  "message": "Bonjour, j'aimerais obtenir plus d'informations sur vos services."
}
```

### Réponses :

- Statut 201 Created si le contact est créé avec succès.
- Statut 400 Bad Request si les données fournies ne respectent pas le schéma de validation.

## Dépendances de développement

- **@types/cors**: Déclarations de types TypeScript pour le middleware cors.
- **@types/express**: Déclarations de types TypeScript pour le framework Express.
- **@types/joi**: Déclarations de types TypeScript pour la bibliothèque Joi.
- **@types/mongoose**: Déclarations de types TypeScript pour la bibliothèque Mongoose.
- **@types/node**: Déclarations de types TypeScript pour Node.js.

## Dépendances de production

- **cors**: Middleware Express pour gérer les requêtes CORS (Cross-Origin Resource Sharing).
- **dotenv**: Permet de charger les variables d'environnement à partir d'un fichier .env.
- **express**: Framework web minimaliste pour Node.js utilisé pour développer les routes et les contrôleurs de l'API.
- **joi**: Bibliothèque de validation de schéma pour valider les données entrantes dans les requêtes HTTP.
- **mongoose**: Outil de modélisation d'objets MongoDB pour Node.js, utilisé pour interagir avec la base de données MongoDB.
- **nodemon**: Outil de surveillance des modifications des fichiers utilisé en développement pour redémarrer automatiquement le serveur lorsqu'un fichier est modifié.
- **typescript**: Langage de programmation pour le développement d'applications Node.js, offrant un typage statique optionnel pour JavaScript.

## Variables d'environnement

Pour faire fonctionner le backend de l'application correctement, certaines variables d'environnement doivent être définies. Voici les variables d'environnement requises et leur description :

- **DB_URI**: Lien vers la base de données MongoDB. Assure-toi de remplacer `<username>` et `<password>` par les informations d'identification appropriées.
- **NODE_ENV**: Environnement d'exécution de l'application. Peut être défini sur "development" pour le développement local ou "production" pour l'environnement de production.
- **FRONTEND_URL**: URL du frontend de l'application. Utilisé pour configurer les autorisations CORS et les redirections.
- **PRODUCTION_ORIGIN**: URL d'origine de production pour les autorisations CORS. Assure-toi de remplacer "[https://site.com/](https://site.com/)" par l'URL réelle de ton site en production.

### Exemple de fichier .env

créer un fichier .env à la racine de ton projet et de définir les valeurs appropriées pour ces variables en fonction de ton environnement de développement ou de production.

```.env
DB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/mydatabase
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
PRODUCTION_ORIGIN=https://site.com/
```

## Scripts

- **test**: Lance les tests de l'application. Actuellement, il affiche simplement un message d'erreur indiquant qu'aucun test spécifié n'est trouvé.
- **start**: Compile le code TypeScript en JavaScript en mode surveillance continue (-w) à l'aide de tsc (le compilateur TypeScript) et démarre le serveur avec nodemon. Cela permet de redémarrer automatiquement le serveur à chaque modification du code.
- **build**: Compile le code TypeScript en JavaScript en une seule fois à l'aide de tsc. Ce script est généralement utilisé pour la construction en production.
- **start:prod**: Démarre le serveur en utilisant le code JavaScript généré dans le dossier build à l'aide de node. Ce script est utilisé pour démarrer le serveur en environnement de production.

```bash
pnpm i
```

```bash
pnpm run start
```

```bash
pnpm run build
```

```bash
pnpm run start:prod
```

## Fonctionnalités futures

### Newsletter

La fonctionnalité de newsletter permettra aux utilisateurs de s'abonner ou de se désabonner pour recevoir les dernières mises à jour sur tes projets. L'implémentation de cette fonctionnalité nécessitera l'utilisation de MJML pour la création de modèles d'e-mails réactifs et de Nodemailer pour l'envoi des e-mails aux abonnés.

#### Souscription à la newsletter

Les utilisateurs auront la possibilité de s'abonner à la newsletter en fournissant leur adresse e-mail via un formulaire dédié sur le site. Lorsqu'ils soumettent le formulaire, leur adresse e-mail sera enregistrée dans la base de données des abonnés.

#### Désabonnement de la newsletter

Les utilisateurs auront également la possibilité de se désabonner de la newsletter en cliquant sur un lien de désabonnement inclus dans chaque e-mail. Lorsqu'ils cliquent sur ce lien, leur adresse e-mail sera retirée de la liste des abonnés.

#### Envoi des e-mails

Une fois que les utilisateurs sont abonnés à la newsletter, ils recevront périodiquement des e-mails contenant des informations sur tes derniers projets, les mises à jour et les annonces importantes. Ces e-mails seront créés à l'aide de modèles MJML pour assurer une compatibilité et une présentation optimale sur différentes plateformes de messagerie
