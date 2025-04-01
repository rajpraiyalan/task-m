import UsersExternal from '../external/users.external';

export default class UserService {
  api = new UsersExternal();

  fetchUsers() {
    return this.api.fetchUsers();
  }
}