import * as tslib_1 from "tslib";
//api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
let ApiConsultasService = class ApiConsultasService {
    constructor(http) {
        this.http = http;
        // API path
        this.baseUrl = 'http://localhost:3000/consultas';
        // Http Options
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    // Handle API errors
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    }
    ;
    // Get consultas data
    getAll() {
        return this.http
            .get(this.baseUrl)
            .pipe(retry(2), catchError(this.handleError));
    }
    // Get single consulta data by ID
    get(id) {
        return this.http
            .get(this.baseUrl + '/' + id)
            .pipe(retry(2), catchError(this.handleError));
    }
    // Create a new item
    create(item) {
        return this.http
            .post(this.baseUrl, JSON.stringify(item), this.httpOptions)
            .pipe(retry(2), catchError(this.handleError));
    }
    // Update item by id
    update(id, item) {
        return this.http
            .put(this.baseUrl + '/' + id, JSON.stringify(item), this.httpOptions)
            .pipe(retry(2), catchError(this.handleError));
    }
    // Delete item by id
    delete(id) {
        return this.http
            .delete(this.baseUrl + '/' + id, this.httpOptions)
            .pipe(retry(2), catchError(this.handleError));
    }
};
ApiConsultasService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], ApiConsultasService);
export { ApiConsultasService };
//# sourceMappingURL=api-consultas.service.js.map