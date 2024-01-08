import axios, { AxiosInstance } from 'axios'
import { setCookie, getCookie } from 'cookies-next';
import { Action, Reaction, SignResponse, User } from '../types/types';

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
        window.location.href = '/myactions';
        return response.data;
      } else if (response.data && response.status === 401) {
        return response.data;
      } else {
        return null;
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
        window.location.href = '/signin';
        console.log(response.data.session.access_token);
        return response.data;
      } else {
        window.location.href = '/signin';
        return response.data;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async githubSignin() {
    window.location.href = 'http://localhost:3001/auth/github';
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

  async getActions(): Promise<Action[]> {
    try {
      let response = await this.api.get('/action');

      if (response.data && response.status === 200) {
        return response.data;
      } else {
        return response.data;
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async getReactions(): Promise<Reaction[]> {
    try {
      let response = await this.api.get('/reaction');

      if (response.data && response.status === 200) {
        return response.data;
      } else {
        return response.data;
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}

export default APIService;