import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

const baseUrl = `${environment.apiUrl}/02a4b5fb-188c-4cef-8c20-62603dab544a`;

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get(baseUrl).
            pipe(
               map((data: any) => {
                 return data;
               }), catchError( error => {
                 return throwError( 'Something went wrong!' );
               })
            )
        }
}
