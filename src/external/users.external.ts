import {USERS_URL} from '../config/constants';
import fetch from 'node-fetch';

interface Users {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
}

export default class UsersExternal {
  baseUrl = USERS_URL;

  async fetchUsers(): Promise<Users[]> {
    const response = await fetch(this.baseUrl);
    const data = await response.json();
    return data as Users[];
  }
}