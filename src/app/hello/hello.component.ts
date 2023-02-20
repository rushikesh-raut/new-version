import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hello',
   templateUrl: './hello.component.html',
  // template:`<div> hello frd </div>
  // <p>and </p> 
  //<h1>virul</h1>`,
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  result :any 
  //  imageurl="assets/bapa.jpg"
    showbutton=false
    buttoncolor='orange'
    primerybutton=`background-color: yellow;
    font-size: 15px;
    margin: 10px;
    border-color:black;`
    assigend=false
    local:any
   local2:any

   place:any
   location:any
   pincode:any

  constructor(private active : ActivatedRoute) { }

  ngOnInit(): void {
    let city = this.active.snapshot.queryParamMap.get('place')
    console.log('city=',city)
    
  this.active.queryParamMap.subscribe((param)=>{
    this.place=param.get('place')
    this.location=param.get('location')
    this.pincode=param.get('pincode')

  })
  
  }
   tooglebutton(){
  this.showbutton=!this.showbutton
  if(this.showbutton){
    this.primerybutton=`background-color:red;
    font-size: 25px;
    margin: 10px;
    border-color:black;`
  }else{
    this.primerybutton=`background-color:green;
    font-size:20px;
    margin: 10px;
    border-color:black;`
  }
  
   }
  msg(){
    console.log ('button click')
    
  }
  sum(){
    let a=5;
    let b=10;
    this.result=a+b
  }
  // user(rushi:any){
  //   let password=rushi.value.password
  //   let username=rushi.value.username
  //   console.log("rushi"+password+ " " + username)
  // }

 day=false
  a=5
 y=10
use(){
  console.log ("clicked button")
  
 }
 studentdetqails =[{
  name :'rushi',
  lastname : 'raut',
  address : 'puna'
 },
{
  name :'ravi',
  lastname : 'bagade',
  address : 'virul'
},
{
  name :'gaurav',
  lastname : 'shay',
  address : 'pulgone'
}]
addrecord(){
  this.studentdetqails.push({
    name :'lokesh',
  lastname : 'dhoni',
  address : 'mumbai'

 })


}
removerecord (index:any){
  this.studentdetqails.pop()

}
}



