import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

const baseUrl = `${environment.apiUrl}/2893103a-3d2d-44f5-8b33-b5294068e33a`;

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
