import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { Child1Component } from './child1/child1.component';
import { VivoComponent } from './directive/vivo/vivo.component';
import { ExamplehttpComponent } from './examplehttp/examplehttp.component';
import { Assigenment1Component } from './features1/assigenment1/assigenment1.component';
import { Assigenment2Component } from './features1/assigenment2/assigenment2.component';
import { LoginComponent } from './features1/login/login.component';
import { ZeroComponent } from './features1/zero/zero.component';
import { GirlsSectionComponent } from './girls-section/girls-section.component';
import { HelloComponent } from './hello/hello.component';
import { MensSectionComponent } from './mens-section/mens-section.component';
import { ParentComponent } from './parent/parent.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ShopCategoryComponent } from './shop-category/shop-category.component';

const routes: Routes = [
 { path :'hello',component:HelloComponent,

 children:[{

  path:'shop',component:ShopCategoryComponent
 }]
},
  
 {path: 'form' ,component: ReactiveformComponent},

 {path : 'use',component:ExamplehttpComponent},

 {path:'',redirectTo:'shop',pathMatch:'full'},


 {path:'girls',component:GirlsSectionComponent},


 {path:'mens',component:MensSectionComponent},


 {path:'gaurav',component:VivoComponent},

 {path:'modo',loadChildren:() => import('./features1/features1.module').then(el=> el.Features1Module) },
 {path:'lazy',loadChildren:()=> import('./lazy/lazy.module').then(mb=>mb.LazyModule)},


 {path :'jay',component:Child1Component},


 {path:'assi',component:Assigenment1Component,
 children:[{
  path:'assi2',component:Assigenment2Component,
  children:[{
    path:'login',component:LoginComponent
  }]
}]
},

//  {path:'assi2',component:Assigenment2Component},


 {path :'ravi',component:ParentComponent},
 
  {path:'**',component:ZeroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
