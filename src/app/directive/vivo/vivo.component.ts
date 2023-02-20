import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vivo',
  templateUrl: './vivo.component.html',
  styleUrls: ['./vivo.component.scss']
})
export class VivoComponent implements OnInit {
hero=true
  constructor() { }

  ngOnInit(): void {
  }
  vivo:any
  h1(abcc:any){
console.log(abcc)
this.vivo=abcc
  }
  hr(abc:any){
    this.vivo=abc
    console.log(abc)
  }
}
