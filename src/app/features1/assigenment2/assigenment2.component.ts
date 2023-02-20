import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assigenment2',
  templateUrl: './assigenment2.component.html',
  styleUrls: ['./assigenment2.component.scss']
})
export class Assigenment2Component implements OnInit {

  constructor(private activa:ActivatedRoute) { }
h2:any
h3:any
  ngOnInit(): void {
  this.activa.queryParamMap.subscribe((good)=>{
    this.h2=good.get('deta')
     this.h3=JSON.parse(this.h2)

  })
  }

}
