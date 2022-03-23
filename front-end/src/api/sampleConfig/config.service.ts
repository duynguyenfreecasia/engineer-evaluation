import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  configUrl =
    'https://mfdjuwwknc.execute-api.us-west-2.amazonaws.com/api/getalldata';

  getConfig() {
    return this.http.get<any>(this.configUrl);
  }
}
