import { User, UserRegisterRequest } from '@/models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userUrl: string = 'users';

  constructor(private http: HttpClient) {}

  createUserAccount(user: UserRegisterRequest): Observable<User> {
    return this.http
      .post<User>(this.userUrl, user)
      .pipe(catchError(this.handleError<User>('createUserAccount')));
  }

  /** Log a UserService message*/
  private log(message: string) {
    console.error(message);
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
