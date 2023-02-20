import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TakeService } from 'src/app/Servic/take.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private servi : TakeService , private fb : FormBuilder) { }
  form = this.fb.group({
    username:[''],
    password:['']
  })

  ngOnInit(): void {
  }

}
