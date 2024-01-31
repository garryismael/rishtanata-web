import { Account } from '@/models/account';
import { createReducer, on } from '@ngrx/store';
import { login, logout } from './auth.actions';

export const initialState: Account | undefined = undefined;

export const authReducer = createReducer(
  initialState,
  on(login, (state) => state),
  on(logout, () => undefined)
);
