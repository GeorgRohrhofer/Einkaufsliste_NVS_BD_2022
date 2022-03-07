import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Element } from '../element';

@Component({
 selector: 'app-liste',
 templateUrl: './liste.component.html',
 styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
 constructor(private ds: DataService) { } // Dependency Injection
 //elements = this.ds.getTodos(); 

 elements: Element[] = [];
 ngOnInit() { 
     this.ds.getTodos().subscribe((data: Element[])=> this.elements = data);
}

 deleteTodo(id:number){
     this.ds.deleteTodo(id).subscribe(() => {this.ds.getTodos().subscribe((data: Element[])=> this.elements = data)});
 }
}
