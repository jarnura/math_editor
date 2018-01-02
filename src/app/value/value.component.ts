import { Component, OnInit, Input, Output, OnChanges, EventEmitter, trigger, state, style, animate, transition } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css'],
})
export class ValueComponent implements OnInit {
    
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  operant: number;
  
   addobject =  {
      text: "",
      value: 0
  };
  
   constructor() { }

    ngOnInit() {
    }
    

  @Output()
      add: EventEmitter<any> = new EventEmitter();
      
    emitoperant() {
        this.addobject['text'] = this.operant.toString() ;
        this.addobject['value'] = this.operant;
        this.add.emit(this.addobject);
        console.log(this.addobject.text + this.operant);
        this.visible = false;
        this.visibleChange.emit(this.visible);
    }

}
