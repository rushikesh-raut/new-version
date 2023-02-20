import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {
  username = new FormControl()
  constructor(private fb : FormBuilder){}
  profile = this.fb.group({
    firstname :['',[Validators.required,Validators.maxLength(6)]],
    lastname : [''],
    address : ['']
  })
  
  user:any = [{
    firstname : 'rushi',
    lastname: 'raut',
    address: 'mumbai',
    vilage : 'pulgone'
  },
  {
    firstname : 'jay',
    lastname: 'bhopale',
    address: 'nagpur',
    vilage : 'pulgone'
  },
  {
    firstname: 'akshay',
    lastname: 'raut',
    address: 'pune',
    vilage : 'amravati'
  }]

  //  get http (){
  //   return this.profile.get('firstname') as FormControl
  //  }

 ngOnInit(): void {}
 a(){
  this.username.setValue('rushi')
 }

 hello1(){
  this.profile.markAllAsTouched()
 }

 hello (){
  this.profile.patchValue({
  firstname: 'rushikesh',
  lastname:'raut',
  address: 'virul'

  })

 }
 for(arr:any){
  this.profile.patchValue(arr)
 }
 h2(){
  this.user.push({
   firstname :this.profile.value.firstname,
   lastname:this.profile.value.lastname,
   address :this.profile.value.address
  })
 }

}
