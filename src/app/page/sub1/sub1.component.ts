import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sub1',
  templateUrl: './sub1.component.html',
  styleUrls: ['./sub1.component.css']
})
export class Sub1Component implements OnInit {

  constructor() { }
  
  num1: number;
  num2: number;
  subractobj = {
      num1: 0,
      num2: 0,
  }
  
  @Output()
    catchnum1: EventEmitter<number> = new EventEmitter();
  @Output()
    catchnum2: EventEmitter<number> = new EventEmitter();


  emitnum1(num) {
      this.catchnum1.emit(this.num1);
  }
  
  emitnum2(num) {
      this.catchnum2.emit(this.num2);
  }
    

  ngOnInit() {
  }

}
