import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LocalSpinnerService {
  private _spinners$: { [id: string]: BehaviorSubject<boolean> } = {};

  public getSpinnerSubject(spinnerId: string): BehaviorSubject<boolean> {
    return this._spinners$[spinnerId];
  }

  public registerComponent(spinnerId: string): Observable<boolean> {
    this.createNewSpinner(spinnerId);
    return this._spinners$[spinnerId].asObservable();
  }

  public destroyComponent(spinnerId: string): void {
    if (this._spinners$[spinnerId]) this._spinners$[spinnerId].unsubscribe();
    delete this._spinners$[spinnerId];
  }

  public startLocalSpinner(spinnerId: string): void {
    this._spinners$[spinnerId].next(true);
  }

  public stopLocalSpinner(spinnerId: string): void {
    this._spinners$[spinnerId].next(false);
  }

  // eslint-disable-next-line prettier/prettier
  public withLocalSpinner<T>(observable: Observable<T>, spinnerId: string): Observable<T> {
    this.createNewSpinner(spinnerId);
    this._spinners$[spinnerId].next(true);
    return observable.pipe(
      map(result => {
        this._spinners$[spinnerId].next(false);
        return result;
      }),
      catchError(error => {
        this._spinners$[spinnerId].next(false);
        return throwError(error);
      })
    );
  }

  private createNewSpinner(componentId: string): void {
    if (!this._spinners$[componentId]) {
      this._spinners$[componentId] = new BehaviorSubject<boolean>(false);
    }
  }
}
