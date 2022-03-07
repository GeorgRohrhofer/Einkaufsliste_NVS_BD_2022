import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
 selector: 'app-formular',
 templateUrl: './formular.component.html',
 styleUrls: ['./formular.component.css']
})
export class FormularComponent implements OnInit {
 constructor(private ds: DataService) { } // Dependency Injection
 newEntry = '';
 newPrice = 0;
 msg = '';
 addTodo(): void {
 this.ds.addTodo(this.newEntry, this.newPrice).subscribe(); // Service-Methode
 this.msg = 'Todo item "' + this.newEntry + ' with Price: ' + this.newPrice + '" created! ';
 this.newEntry = '';
 this.newPrice = 0;
 }
 ngOnInit(): void { }
}