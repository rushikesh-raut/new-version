import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Features1RoutingModule } from './features1-routing.module';
import { ZeroComponent } from './zero/zero.component';
import { Assigenment1Component } from './assigenment1/assigenment1.component';
import { Assigenment2Component } from './assigenment2/assigenment2.component';
import { Router } from '@angular/router';
import { BankComponent } from './bank/bank.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ZeroComponent,
    Assigenment1Component,
    Assigenment2Component,
    BankComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    Features1RoutingModule,
    ReactiveFormsModule
  ],
  exports: [ZeroComponent,Assigenment1Component,Assigenment2Component,BankComponent]
})
export class Features1Module { 
constructor(private route :Router) { }

  ngOnInit(): void {}
}


