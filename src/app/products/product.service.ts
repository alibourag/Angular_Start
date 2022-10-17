import { Injectable } from '@angular/core';
import { product } from './product';
import{HttpClient, HttpErrorResponse } from '@angular/common/http'
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url ='api/products/products.json'
  products : product[]=[]

  constructor(private http : HttpClient) { }
  getProducts():Observable <product[]>{
    return this.http.get<product[]>(this.url).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    )
  }
  getProduct(id : number):Observable<any>{
    if (id === 0) {
      return of(this.initializeProduct());
    }
    const url = `${this.url}/${id}`;
    return this.http.get<product>(url)
      .pipe(
        tap(data => console.log('getProduct: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }
  getProductById(productId : number):Observable <product|undefined>{
     return this.getProducts().
    pipe(
      map((products: product[]) => products.find(p => p.productId === productId))
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
  private initializeProduct() {
    // Return an initialized object
    
  }
}
