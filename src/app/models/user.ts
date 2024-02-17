export class User {
  login: string;
  password: string;
  name: string;
  token: string;

  constructor(login: string, password: string, name: string) {
    this.login = login;
    this.password = password;
    this.name = name;
    this.token = this.generateToken();
  }

  private generateToken(): string {
    return [Math.random(), Math.random(), Math.random()].map(el => el.toString(36).substring(2)).join('');
  }
}
