import { Injectable } from '@angular/core';
import { Element } from './element';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Subject } from 'rxjs';

const httpOptions = {
   headers: new HttpHeaders({
     'Content-Type':  'application/json',
   })
 };

@Injectable({ providedIn: 'root' })
export class DataService {
    constructor(private http: HttpClient) { }
    public subject = new Subject<void>();
    uri= 'http://localhost:2403/einkaufsliste';

    e: Element | undefined;

    newEntry: Element | undefined;
    getTodos(): Observable<Element[]>{
       return this.http.get<Element[]>(this.uri);// Observable 
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
      return this.http.post<Element>(this.uri, {product:product, price:price, done:false}, httpOptions)
        
    }

    deleteTodo(id: number ): Observable<unknown>{
      return this.http.delete<Element>(this.uri + '/'+ id, httpOptions);
    }

    getSubject(): Observable<void>{
      return this.subject.asObservable();
    }

    getTodo(id:number): Observable<Element>{
      return this.http.get<Element>(this.uri + "/" + id);// Observable  
    }

    check(id: number){
      this.getTodo(id).subscribe((data:Element)=> this.e = data);
      if(this.e != undefined){
        console.log(this.e.product);
        if(this.e.done == true){
          return this.http.put<Element>(this.uri + "/" + this.e.id, {product:this.e.product, price:this.e.price, done:false}, httpOptions).subscribe(() => this.subject.next());
        }
        else{
          return this.http.put<Element>(this.uri + "/" + this.e.id, {product:this.e.product, price:this.e.price, done:true}, httpOptions).subscribe(() => this.subject.next());
        }
      }
      return null;
    }
}
