import { asNativeElements, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomhighliter]'
})
export class CustomhighliterDirective {

  constructor(private el:ElementRef ) { 
    this.el.nativeElement.style.backgroundColor=""
  }


  @HostListener('mouseleave') usermous(){
    this.el.nativeElement.style.color="red"
  }


  @HostListener('mouseenter')usermouse(){
    this.el.nativeElement.style.color='orange'
  }
}  
