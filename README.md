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

## Fonctionnalités futures

### Newsletter

La fonctionnalité de newsletter permettra aux utilisateurs de s'abonner ou de se désabonner pour recevoir les dernières mises à jour sur tes projets. L'implémentation de cette fonctionnalité nécessitera l'utilisation de MJML pour la création de modèles d'e-mails réactifs et de Nodemailer pour l'envoi des e-mails aux abonnés.

#### Souscription à la newsletter

Les utilisateurs auront la possibilité de s'abonner à la newsletter en fournissant leur adresse e-mail via un formulaire dédié sur le site. Lorsqu'ils soumettent le formulaire, leur adresse e-mail sera enregistrée dans la base de données des abonnés.

#### Désabonnement de la newsletter

Les utilisateurs auront également la possibilité de se désabonner de la newsletter en cliquant sur un lien de désabonnement inclus dans chaque e-mail. Lorsqu'ils cliquent sur ce lien, leur adresse e-mail sera retirée de la liste des abonnés.

#### Envoi des e-mails

Une fois que les utilisateurs sont abonnés à la newsletter, ils recevront périodiquement des e-mails contenant des informations sur tes derniers projets, les mises à jour et les annonces importantes. Ces e-mails seront créés à l'aide de modèles MJML pour assurer une compatibilité et une présentation optimale sur différentes plateformes de messagerie
