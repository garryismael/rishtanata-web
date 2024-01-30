import { Account } from './account';

export interface Token {
  access_token: string;
  token_type: string;
  account: Account;
}

export interface LoginForm {
  email: string;
  password: string;
}
