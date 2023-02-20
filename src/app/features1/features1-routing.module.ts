import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Parent1Component } from '../parent1/parent1.component';
import { Assigenment1Component } from './assigenment1/assigenment1.component';
import { Assigenment2Component } from './assigenment2/assigenment2.component';
import { BankComponent } from './bank/bank.component';

const routes: Routes = [
  // {path:'bro',component:Parent1Component},
{path: '' , component:BankComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Features1RoutingModule { }
