import { HandleError, HttpErrorHandler } from './http-error-handler.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


const httpOptions = {headers: new HttpHeaders({'Content-Type':  'application/json'})};

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  public API = environment.API;
  private handleError: HandleError;
  modelList: any[];

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('CrudService');
  }

  add(model: any, apiController: string): Observable<any> {
    return this.http.post<any>(this.API + apiController , model, httpOptions).pipe
            (catchError(this.handleError('add', model)));
  }

  getAll(apiController: string): Observable<any[]> {
    return this.http.get<any[]>(this.API + apiController, httpOptions)
          .pipe(map(res => this.modelList = res ),
            catchError(this.handleError('getAll', [])));
  }

  update(id: number, model: any, apiController: string): Observable<any> {
    return this.http.put<any>(this.API + apiController + id, model, httpOptions).pipe(
      catchError(this.handleError('update', model))
    );
  }

  delete(id: number, apiController: string): Observable<{}> {
    return this.http.delete(this.API + apiController + id, httpOptions).pipe(
            catchError(this.handleError('delete')));
  }

}
