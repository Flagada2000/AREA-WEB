# AREA WEB

## 03 - Appels API

### Connexion et Inscription
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
### Todo