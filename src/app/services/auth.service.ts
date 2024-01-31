import { LoginForm, Token } from '@/models/auth';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { handleError } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authPath: string = 'auth';
  private http: HttpClient = inject(HttpClient);

  login(form: LoginForm): Observable<Token> {
    const body = new FormData();
    body.append('username', form.email);
    body.append('password', form.password);
    return this.http
      .post<Token>(`${this.authPath}/token`, body)
      .pipe(catchError(handleError<Token>('Login')));
  }
}
