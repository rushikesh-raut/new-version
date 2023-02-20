import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
h1 :any 
  transform(value: any , ...args :any []): unknown {
  
// this.h1 =  value * value 


this.h1 = value.reverse()
 return this.h1
  }

}
