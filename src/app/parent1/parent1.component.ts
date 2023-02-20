import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.scss']
})
export class Parent1Component implements OnInit {
arr :any
a :any
  constructor() { } 
  student = 'india win the match'
  isUnchanged = true

  ngOnInit(): void {
  }
hello(ad:any){
this.arr=ad

}
zero(){
  this.a= 'click eventy'
  // console.log("click the button")
}

}



