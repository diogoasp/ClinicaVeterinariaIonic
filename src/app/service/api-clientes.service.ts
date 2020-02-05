//api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Cliente } from '../models/Cliente';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class ApiClientesService {
    // API path
    baseUrl = 'http://localhost:3000/clientes';
    constructor(private http: HttpClient) { }
    // Http Options
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }
    // Handle API errors
    handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    };
    // Get clientes data
    getAll(): Observable<Cliente> {
        return this.http
            .get<Cliente>(this.baseUrl)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
    }
    // Get single cliente data by ID
    get(id): Observable<Cliente> {
        return this.http
            .get<Cliente>(this.baseUrl + '/' + id)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
    }
    // Create a new item
    create(item): Observable<Cliente> {
        return this.http
            .post<Cliente>(this.baseUrl, JSON.stringify(item), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
    }
    // Update item by id
    update(id, item): Observable<Cliente> {
        return this.http
            .put<Cliente>(this.baseUrl + '/' + id, JSON.stringify(item), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
    }
    // Delete item by id
    delete(id) {
        return this.http
            .delete<Cliente>(this.baseUrl + '/' + id, this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )
    }
}