import { Injectable } from '@angular/core';
import { Element } from './element';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
   headers: new HttpHeaders({
     'Content-Type':  'application/json',
   })
 };

@Injectable({ providedIn: 'root' })
export class DataService {
    constructor(private http: HttpClient) { }
    
    uri= 'http://localhost:2403/einkaufsliste';

    newEntry: Element | undefined;
    getTodos(): Observable<Element[]>{
       return this.http.get<Element[]>(this.uri);// Observable
   }
   private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
    
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
    
        // TODO: better job of transforming error for user consumption
        //this.log(`${operation} failed: ${error.message}`);
    
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
/*
    TODOS: Element[] = [ { id: 0, product: 'Essen', price: 10 } ];
    newEntry: Element | undefined;
    getTodos() {
    return this.TODOS;
 }
 
 addTodo(product: string, price: number) {
    this.newEntry = {
    id: this.TODOS.length,
    product: product,
    price: price
    };
    this.TODOS.push(this.newEntry);
 } 
 deleteTodo(id: number ){
   const filteredTodo = this.TODOS.filter(todo => todo.id !== id);
   this.TODOS = filteredTodo;
 }
 */

 addTodo(product: string, price: number) : Observable<Element>{
    return this.http.post<Element>(this.uri, {product:product, price:price}, httpOptions)
 }

 deleteTodo(id: number ): Observable<unknown>{
   return this.http.delete<Element>(this.uri + '/'+ id, httpOptions)
 }
}
