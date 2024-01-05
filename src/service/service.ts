import axios, { AxiosInstance } from 'axios'
import { setCookie, getCookie } from 'cookies-next';
import { SignResponse, User } from '../types/types';

class APIService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_APP_API_URL || 'http://localhost:3001',
      timeout: 10000,
      withCredentials: true,
    })
  }

  async signin(data: { email: string, password: string }): Promise<SignResponse | null> {
    try {
      let response = await this.api.get<SignResponse>('/auth/signin', { params: data });

      if (response.data && response.data.session.access_token && response.status === 200) {

        console.log(response.data.session.access_token);
        setCookie('accessToken', response.data.session.access_token, { httpOnly: false, secure: false, path: '/' });

        let response1 = await this.api.get('/auth/test-token');

        console.log(response1.data);

        return response.data;
      } else {
        return response.data;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async signup(data: { email: string, password: string }): Promise<SignResponse | null> {
    try {
      let response = await this.api.post('/auth/signup', data);

      if (response.data && response.data.session.access_token && response.status === 201) {

        console.log(response.data.session.access_token);
        setCookie('accessToken', response.data.session.access_token, { httpOnly: false, secure: false, path: '/' });

        let response1 = await this.api.get('/auth/test-token');

        console.log(response1.data);

        return response.data;
      } else {
        return response.data;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async me(): Promise<User | null> {
    try {
      let response = await this.api.get('/auth/me');

      if (response.data && response.status === 200) {

        console.log(response.data.user);

        return response.data.user;
      } else {
        console.log(response.data);
        return response.data;
      }

    } catch (error) {
      console.error(error);
      return null;
    }
  }

  getActionsReactions() {
    // TODO : Récupérer jwt dans le localStorage
    // TODO Faire une requete GET vers /actions-reactions avec le token dans le header
    return this.api.get('/actions-reactions')
  }
}

export default APIService;