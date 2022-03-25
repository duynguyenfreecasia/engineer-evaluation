import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { EvaluateCreate } from 'src/app/modules/evaluate/interfaces/evaluate-create.interface';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl: string;

  constructor(private readonly http: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  public getEvaluation(): Observable<Object> {
    const url = `${this.baseUrl}/engeva/api/getlist`;
    return this.http.get(url);
  }

  public createEvaluation(input: EvaluateCreate) {
    const url = `${this.baseUrl}/engeva/api/insert`;
    return this.http.post(url, input);
  }

  private handleError(error: HttpErrorResponse) {
    console.log('error', error);
    // return an observable with a user-facing error message
    return throwError('Internal Error.');
  }
}
