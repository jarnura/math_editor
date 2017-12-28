import { Component, OnInit, Input, Output, OnChanges, EventEmitter, trigger, state, style, animate, transition } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
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
export class AddComponent implements OnInit {

  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  operanta: number;
  operantb: number;
  addobject =  {
      text: "",
      value: 0
  };
  
   @Output()
      add: EventEmitter<any> = new EventEmitter();
      
      adddata() {
          this.addobject['text'] = "add(" + this.operanta  + "," + this.operantb + ")" ;
          this.addobject['value'] = (this.operanta + this.operantb);
      this.add.emit(this.addobject);
      console.log(this.addobject.text + (this.operanta + this.operantb));
    }
  constructor() { }

  ngOnInit() {
  }
          close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

}
