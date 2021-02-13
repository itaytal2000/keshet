import { Injectable } from '@angular/core';
import { catchError, map} from "rxjs/operators";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from "rxjs";

@Injectable({ 
  providedIn: 'root'
})

export class FileDataService {

  constructor(private http: HttpClient) {}
  

  public getListOfGroup(url: string): Observable<any> 
  {
    // Call the http GET
    return this.http.get(url).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }


  private extractData(res: Response) 
  {
    let body = res;
    return body || {};
  }
  

  // Client side/network or backend failure
  private handleError(error: HttpErrorResponse) 
  {
    if (error.error instanceof ErrorEvent) 
    {
      // Client-side/network error
      console.error("An error occurred:", error.error.message);
    } 
    else 
    {
      // The backend returned an unsuccessful response code
      console.error('Backend returned code ${error.status}, ' + 'body was: ${error.error}'
      );
    }
    // return an observable with error message
    return throwError(error);
  }
}