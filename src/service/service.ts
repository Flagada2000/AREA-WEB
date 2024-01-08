import axios, { AxiosInstance } from 'axios'
import { setCookie, getCookie } from 'cookies-next';
import { Action, ActionUserInfo, Reaction, Service, SignResponse, User, UserAction, UserProfile } from '../types/types';

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

  async getProfile(): Promise<UserProfile | null> {
    try {
      let response = await this.api.get(`/auth/profile`);

      if (response.data && response.status === 200) {
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

  async getAction(id: number): Promise<Action | null> {
    try {
      let response = await this.api.get(`/action/${id}`);

      if (response.data && response.status === 200) {
        return response.data;
      } else {
        return response.data;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getUserActions(): Promise<UserAction[]> {
    try {
      let response = await this.api.get('/action/user');

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

  async getService(id: number): Promise<Service | null> {
    try {
      console.log(id)
      let response = await this.api.get(`/service/${id}`);

      if (response.data && response.status === 200) {
        return response.data;
      } else {
        return response.data;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getUserActionInfo(): Promise<ActionUserInfo[] | null> {
    try {
      const userActions = await this.getUserActions();
      if (!userActions.length)
        return [];

      const actionsInfo: ActionUserInfo[] = [];

      for (const userAction of userActions) {
        const action = await this.getAction(userAction.action_id);
        console.log(action)
        const service = action ? await this.getService(action.service_id) : null;

        if (action && service) {
          actionsInfo.push({
            id: userAction.id,
            action_id: userAction.action_id,
            action_config: userAction.action_config,
            action: action,
            service: service,
          });
        }
      }
      return actionsInfo;
    } catch (error) {
      console.error(error);
      return null;
    }
  }


}

export default APIService;