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
 isChecked = false;
 e: Element[] = [];

 elements: Element[] = [];

 isComplete: boolean = false;

 completeItem(id:number) {
    this.ds.check(id);
    //this.ds.subject.next();
}

 ngOnInit() { 
     this.ds.getTodos().subscribe((data: Element[])=> {
                                                        if(this.isChecked)
                                                        {
                                                            this.elements = data
                                                        }
                                                        else
                                                        {
                                                            this.elements = []
                                                            data.forEach(e => {
                                                                                if(e.done == false)
                                                                                {
                                                                                    this.elements.push(e);
                                                                                }
                                                                            }
                                                                            )
                                                        }
                                                    }
                                                    );
     this.ds.subject.next();
}

 deleteTodo(id:number){
     this.ds.deleteTodo(id).subscribe(() => {this.ds.getTodos().subscribe((data: Element[])=> this.elements = data);this.ds.subject.next();})
 }

 checkValue(event: any, id:number){
    console.log(event);
    //this.ds.check(id);
 }

 Check(){
     this.isChecked = !this.isChecked;
     console.log(this.isChecked);
     this.ngOnInit();
 }
}
