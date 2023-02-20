import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
@Input() student :any 
@Output() display = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    let arr = {id : 1 , name : "rushi"}
    this.display.emit(arr) 
	
}
   
  

  }


