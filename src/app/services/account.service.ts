import { Account, AccountRegister } from '@/models/account';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError } from 'rxjs';
import { handleError } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private accountUrl: string = 'accounts';
  private http: HttpClient = inject(HttpClient);

  createAccount(request: AccountRegister) {
    return this.http
      .post<Account>(`${this.accountUrl}/activate`, request)
      .pipe(catchError(handleError<Account>('createAccount')));
  }
}
