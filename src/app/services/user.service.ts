import { User, UserRegisterRequest } from '@/models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { handleError } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userUrl: string = 'users';
  private http: HttpClient = inject(HttpClient);

  registerUser(user: UserRegisterRequest): Observable<User> {
    return this.http
      .post<User>(this.userUrl, user)
      .pipe(catchError(handleError<User>('createUserAccount')));
  }
}
