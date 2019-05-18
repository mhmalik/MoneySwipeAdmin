import { Injectable } from '@angular/core';
import { ApiService } from '../../core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private _api: ApiService) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
  User_GetAll() {
    return this._api.get(`${'Customer/GetAllCustomer'}`)
      .pipe(
        map((res: Response) => res),
        catchError(this.handleError<any>('getRegistration'))
      );
  }
}
