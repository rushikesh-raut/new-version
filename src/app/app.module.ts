import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CustomhighliterDirective } from './directive/customhighliter.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Features1Module } from './features1/features1.module';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { FormComponent } from './mycom1/form/form.component';
import { VivoComponent } from './directive/vivo/vivo.component';
import { MensSectionComponent } from './mens-section/mens-section.component';
import { ShopCategoryComponent } from './shop-category/shop-category.component';
import { GirlsSectionComponent } from './girls-section/girls-section.component';
import { LazyComponent } from './mycom1/lazy/lazy.component';
import { ExamplehttpComponent } from './examplehttp/examplehttp.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { http1 } from './interceptor/apphttp';
import { ReversePipe } from './PIPE/reverse.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CustomhighliterDirective,
    ParentComponent,
    ChildComponent,
    ReactiveformComponent,
    Parent1Component,
    Child1Component,
    FormComponent,
    VivoComponent,
    MensSectionComponent,
    ShopCategoryComponent,
    GirlsSectionComponent,
    LazyComponent,
    ExamplehttpComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    Features1Module,
    HttpClientModule
  ],
  providers: [
  {
    provide :HTTP_INTERCEPTORS , useClass :http1 , multi :true 
  }
  ],
  bootstrap: [AppComponent]
  //schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule {
  constructor(){}
  ngOnInit(): void {
  }
 }
