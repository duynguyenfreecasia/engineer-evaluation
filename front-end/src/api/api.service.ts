import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { Observable, throwError } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl: string;

  constructor(private readonly http: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  public getEvaluation(): Observable<Object> {
    const url = `${this.baseUrl}/dev/evaluation-unit`;
    return this.http.get(url);
  }

  private handleError(error: HttpErrorResponse) {
    console.log('error', error);
    // return an observable with a user-facing error message
    return throwError('Internal Error.');
  }
}
