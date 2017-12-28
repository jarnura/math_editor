import { Component, OnInit, Input, Output, OnChanges, EventEmitter, trigger, state, style, animate, transition } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class ValueComponent implements OnInit {
    
  @Input() closable = true;
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
      
      adddata() {
          this.addobject['text'] = this.operant.toString() ;
          this.addobject['value'] = this.operant;
      this.add.emit(this.addobject);
      console.log(this.addobject.text + this.operant);
    }
       close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

}
