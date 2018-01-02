import { Injectable } from '@angular/core';

@Injectable()
export class PageService {

  constructor() { }
  
  subract(num1: number,num2: number): number {
      console.log("service console " + (+num1 - +num2));
      return num1-num2;
  }
  
  add(num1: number,num2: number): number {
      console.log("service console " + num1 + num2);
      return num1+num2;
  }
  
  multiply(num1: number, num2: number): number {
      console.log("service console " + num1 * num2);
      return num1*num2;
  }
  
  divide(num1: number, num2: number): number {
      console.log("service console " + num1 / num2);
      return num1/num2;
  }

}
