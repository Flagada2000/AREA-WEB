import axios from 'axios'

const NEXT_PUBLIC_APP_API_URL = 'http://localhost:3001'

class APIService {
  constructor() {
    this.api = axios.create({
      baseURL: NEXT_PUBLIC_APP_API_URL,
      timeout: 1000,
    })
  }

  get(path) {
    return this.api.get(path)
  }

  post(path, data) {
    return this.api.post(path, data)
  }

  signup(data) {
    // Inscription de l'utilisateur
    console.log(data)
    return this.post('/auth/signup', data)
  }

  signin(data) {
    // Connexion de l'utilisateur
    return this.post('/auth/signin', data)
  }

  getActionsReactions() {
    // TODO : Récupérer jwt dans le localStorage
    // TODO Faire une requete GET vers /actions-reactions avec le token dans le header
    return this.get('/actions-reactions', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
      }
    })
  }
}

export default APIService;