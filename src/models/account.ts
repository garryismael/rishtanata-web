import { User } from './user';

export interface AccountRegister {
  token: string;
  password: string;
  confirm_password: string;
}

export interface Account {
  id: number;
  user: User;
  created_at: string;
  updated_at: string;
}
