# AREA WEB

## 03 - Appels API

Retrouvez la documentation complète de l'API ci-joint : https://flagada2000.github.io/area-api-doc/#/Auth/post_auth_signup

## /auth/

### Connexion et Inscription
```
/auth/signin
/auth/signup
```

Le front-end effectue des appels à une API pour les opérations de connexion et d'inscription. Par exemple, lors de l'inscription, les informations suivantes sont envoyées :
```
{
  "email": "utilisateur@example.com",
  "password": "motdepasse123"
}
```

Les informations reçues en réponse peuvent ressembler à ceci :
```
{
  "user": {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "email": "user@example.com"
  },
  "session": {
    "accessToken": "string"
  }
}
```

### Informations de l'utilisateur
```
/auth/me
```

Exemple :
```
{
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "email": "user@example.com",
  "email_confirmed_at": "2024-01-10T11:02:42.878Z",
  "phone": "string",
  "phone_confirmed_at": "2024-01-10T11:02:42.878Z",
  "last_sign_in_at": "2024-01-10T11:02:42.878Z",
  "created_at": "2024-01-10T11:02:42.878Z",
  "updated_at": "2024-01-10T11:02:42.878Z"
}
```

## /actions/

### Créer une action
```
/actions/create
```

Exemple :
```
{
  "action_id": 0,
  "action_config": "string"
}
```

### Editer une action
```
/actions/update
```

Exemple :
```
{
  "id": 0,
  "action_id": 0,
  "action_config": "string"
}
```

### Supprimer une action
```
/actions/delete/{id}
```

Requis:
L'ID de l'action à supprimer.

### Actions de l'utilisateur
```
actions/user
```

Permet de regrouper toutes les actions que possède l'utilisateur.
