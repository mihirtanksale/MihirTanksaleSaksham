import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams, HttpRequest } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Gallery } from './gallery';


const apiUrl = 'http://localhost:3000/gallery';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  constructor(private http: HttpClient) { }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  getGalleryById(id: string): Observable<any> {
    const url = `${apiUrl}/${id}`;
    //pipe used to take input and tranform it to disired output
    return this.http.get<Gallery>(url).pipe(
      catchError(this.handleError)
    );
  }

  // Delete gallery
  deleteGalleryById(id): Observable<any> {
    let url = `${apiUrl}/delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Get all gallery
  getGallery() {
    return this.http.get(`${apiUrl}`);
  }

  addGallery(gallery: Gallery, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('imageTitle', gallery.imageTitle);
    formData.append('imageDesc', gallery.imageDesc);
    const header = new HttpHeaders();
    const params = new HttpParams();

    const options = {
      params,
      reportProgress: true,
      headers: header
    };
    const req = new HttpRequest('POST', apiUrl, formData, options);
    return this.http.request(req);
  }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
