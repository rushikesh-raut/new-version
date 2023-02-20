import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {
@Output() local = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    // let sttudent = [{id : 1 , name: 'rushi'},
    // {id : 2 , name: 'prafull'},
    // {id : 3 , name: 'gajanan'},
    // {id : 4 , name: 'lahoo'}]
    // this.local.emit(sttudent)
  }
  rrr(){
    let sttudent = [{id : 1 , name: 'rushi'},
    {id : 2 , name: 'prafull'},
    {id : 3 , name: 'gajanan'},
    {id : 4 , name: 'lahoo'}]
    this.local.emit(sttudent) 
  }

}
