import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assigenment1',
  templateUrl: './assigenment1.component.html',
  styleUrls: ['./assigenment1.component.scss']
})
export class Assigenment1Component implements OnInit {

  constructor(private route :Router) { }

  ngOnInit(): void {
  }
details=[{
  Animal :'Cow',
  prize:45000,
  cast:'HF',
  milk:'at one time 15 litter.',
  imgur:'/assets/cow.webp'
},
{
  Animal :'Bufello',
  prize:100000,
  cast:'muraa',
  milk:'at one time 20 litter.',
  imgur:'/assets/bufl.jpg'
},{
  Animal :'Bufello',
  prize:55000,
  cast:'cross',
  milk:'at one time 12 litter.',
  imgur:'/assets/buf2.webp'
  
},{
  Animal :'Cow',
  prize:50000,
  cast:'jershey',
  milk:'at one time 10 litter',
  imgur:'/assets/cow2.jpg'
},{
  Animal :'cow',
  prize:45000,
  cast:'HF/cross',
  milk:'at one time 9 litter.',
  imgur:'/assets/imge.jpg'
}]
h1:any
show(abc:any){
  this.h1= JSON.stringify(abc)
this.route.navigate(['assi/assi2'],{queryParams:{deta:this.h1}})
console.log(this.h1)
}
}
