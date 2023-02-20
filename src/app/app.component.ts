import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:  ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'projectrushi';
  constructor( private  row :Router) {}
  ngOnInit():void{
    
  }
  
  route(){
  this.row.navigateByUrl('jay')
  this.row.navigateByUrl('gaurav')
}
  
  socho(){
    this.row.navigate(['rushi'],{queryParams : {place:'pulgone',location:'bhavani mata mandir',pincode:4423032}})
    
}
phone(){
  this.row.navigateByUrl('form')
}
local ='rushi raut '
}
