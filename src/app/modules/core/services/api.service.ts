import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient, private route: Router) { }

  private setHeaders(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };
    // tslint:disable-next-line:prefer-const
    let token = JSON.parse(localStorage.getItem('token'));

    if (token !== '' && token !== null) {
      headersConfig['Authorization'] = 'Bearer ' + token.access_token;
      // tslint:disable-next-line:curly
    }
    //else this.route.navigate(['/']);
    return new HttpHeaders(headersConfig);
  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  get(
    path: string,
    httpParams: HttpParams = new HttpParams()
  ): Observable<any> {
    return this.http
      .get(`${environment.api_url}${path}`, {
        headers: this.setHeaders(),
        params: httpParams
      })
      .pipe(catchError(this.formatErrors));
  }

  getAppVer(
    path: string,
    httpParams: HttpParams = new HttpParams()
  ): Observable<any> {
    return this.http
      .get(`${environment.api_url}${path}`, {
        params: httpParams
      })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http
      .put(`${environment.api_url}${path}`, JSON.stringify(body), {
        headers: this.setHeaders()
      })
      .pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http
      .post(`${environment.api_url}${path}`, JSON.stringify(body), {
        headers: this.setHeaders()
      })
      .pipe(catchError(this.formatErrors));
  }

  login(path: string, body: any): Observable<any> {
    return this.http
      .post(`${environment.login_url}${path}`, body)
      .pipe(catchError(this.formatErrors));
  }

  delete(path): Observable<any> {
    return this.http
      .delete(`${environment.api_url}${path}`, { headers: this.setHeaders() })
      .pipe(catchError(this.formatErrors));
  }

  getImage(path: string): Observable<Blob> {
    return this.http.get(`${environment.api_url}${path}`, {
      headers: this.setHeaders(),
      responseType: 'blob'
    });
  }

  getDocument(path: string): Observable<Blob> {
    return this.http.get(`${environment.api_url}${path}`, {
      responseType: 'blob'
    });
  }

  userData(
    path: string,
    httpParams: HttpParams = new HttpParams()
  ): Observable<any> {
    return this.http
      .get(`${environment.api_url}${path}`, {
        headers: this.setHeaders(),
        params: httpParams
      })
      .pipe(catchError(this.formatErrors));
  }
  getAPIUrl() {
    return `${environment.api_url}`;
  }
}
