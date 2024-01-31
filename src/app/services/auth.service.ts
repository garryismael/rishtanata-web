import { LoginForm, Token } from '@/models/auth';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { handleError } from './http.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authPath: string = 'auth';
  private http: HttpClient = inject(HttpClient);
  private cookieService: CookieService = inject(CookieService);

  login(form: LoginForm): Observable<Token> {
    const body = new FormData();
    body.append('username', form.email);
    body.append('password', form.password);
    return this.http
      .post<Token>(`${this.authPath}/token`, body)
      .pipe(catchError(handleError<Token>('Login')));
  }

  logout() {
    this.cookieService.delete('token');
  }

  isAuthenticated(): boolean {
    const token = this.cookieService.get('token');
    return token && token.length > 0 ? true : false;
  }
}
