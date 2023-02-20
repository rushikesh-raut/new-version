import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  constructor(private location:Location) { }
  zero:any
parent:any
  ngOnInit(): void {
    this.parent = history.state;
    this.parent

    //using location....
    console.log(this.location.getState())
  }
  




  add(ab:any){
    this.studentdata=ab

  }

  hero(abc:any){
    this.zero=abc
    console.log (this.zero.name)
  }
  studentdata=[{
    name :'rushi',
    lastname : 'raut',
    address : 'puna',
   },
  {
    name :'ravi',
    lastname : 'bagade',
    address : 'virul',
  },
  {
    name :'gaurav',
    lastname : 'shay',
    address : 'pulgone',
  }]
  
  
  }

  
  


