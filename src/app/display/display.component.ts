import { Component, OnInit, Input, Output, OnChanges, EventEmitter, trigger, state, style, animate, transition } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
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
export class DisplayComponent implements OnInit {
    
  @Input() closable = true;
  @Input() visible: boolean;
  @Input() variabledata: any;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  operanta: string;
  addobject =  {
      text: "",
      value: 0
  };
  
   @Output()
      add: EventEmitter<any> = new EventEmitter();
      
      adddata() {
          this.addobject['text'] = "(" + this.operanta + ")" ;
          this.addobject['value'] = (this.variabledata[this.operanta]);
      this.add.emit(this.addobject);
      console.log(this.addobject.text + this.addobject.value);
    }
  constructor() { }

  ngOnInit() {
  }
          close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

}
