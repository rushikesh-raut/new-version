import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-examplehttp',
  templateUrl: './examplehttp.component.html',
  styleUrls: ['./examplehttp.component.scss']
})
export class ExamplehttpComponent implements OnInit {

  constructor(private userservice : HttpService,private route :Router) { }
  updateuser :any
  desalber :boolean = false
  disa:boolean = true
 form = new  FormGroup({
  email : new FormControl(''),
  password : new FormControl('')

 }) 
//edit button codeing
edit(arr:any){
this.form.patchValue({
  email:arr.email,
  password: arr.password
})
this.disa = false
this.desalber=true
this.updateuser = arr
}

// using update button codeing put method 
update(){
  let obj={
    email :this.form.value.email,
    password : this.form.value.password,
    id :this.updateuser.id
  }
  this.userservice.putuser(this.updateuser.id,obj).subscribe(value => {console.log('data updated successfully='+value)})
  this.form.reset();
  this.getinfo();
  this.desalber = false 
  this.disa = true
}


//post button codeing to crate new deta 
post(){
let obj={
  email :this.form.value.email,
  password : this.form.value.password,
  id :''
}
this.userservice.postuser(obj).subscribe(value=> {console.log('deta pass succssesfully ='+value)})
this.form.reset();
this.getinfo();
}



deta :any
  ngOnInit(): void {
    this.getinfo()
  }


// using get method featch the data 
 getinfo(){
  this.userservice.getuser().subscribe(value => {console.log('get user data = '+ value)
  this.deta = value
})
 }

 delete(arr:any){
this.userservice.deleteuser(arr.id).subscribe(value => {
  console.log('deta deleted succsessfully = ')
  this.getinfo();
})
 }


 hello = 'angular DEvLoper'
 number = 1234567
 date = new Date()
 decimal = 3455.4122
}




