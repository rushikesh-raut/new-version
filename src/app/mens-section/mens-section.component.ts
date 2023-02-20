import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mens-section',
  templateUrl: './mens-section.component.html',
  styleUrls: ['./mens-section.component.scss']
})
export class MensSectionComponent implements OnInit {

  constructor(private route :Router) { }

  ngOnInit(): void {
  }
  displya=[{
    name :'rushi',
    lname:'raut'
  },
  {
    name :'prafull',
    lname:'sir'
  }]
  hr:any
men(arr:any){
  this.hr=JSON.stringify(arr)
 this.route.navigate(['girls'],{queryParams:{deta:this.hr}})
console.log(this.hr)
}
}
