import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-girls-section',
  templateUrl: './girls-section.component.html',
  styleUrls: ['./girls-section.component.scss']
})
export class GirlsSectionComponent implements OnInit {

  constructor(private activa :ActivatedRoute) { }
yes:any
no:any
  ngOnInit(): void {
    this.activa.queryParamMap.subscribe((just)=>{
      this.yes=just.get('deta')
      console.log(this.yes)
      this.no=JSON.parse(this.yes)
      console.log(this.no)
    })
  }

}
