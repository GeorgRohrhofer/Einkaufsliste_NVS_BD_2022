import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Subscription } from 'rxjs';
//import * as internal from 'stream';
import { DataService } from '../data.service';
import { Element } from '../element';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  elements: Element[] = [];
  count =  0;
  subscription: Subscription;
  constructor(private dataService : DataService) { 
    this.subscription = dataService.getSubject().subscribe(
      {
        next: () => this.dataService.getTodos().subscribe((data: Element[])=> this.count = data.length)
      }
    )
  }

  ngOnInit(): void {
  }

}
