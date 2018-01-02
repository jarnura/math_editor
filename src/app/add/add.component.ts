import { Component, OnInit, Input, Output, OnChanges, EventEmitter, trigger, state, style, animate, transition } from '@angular/core';
import { PageService } from '../page/page.service';

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
    
    constructor( private _functionService: PageService) { }
    
  @Input() visible: boolean;
  @Input() variabledata: any;
  @Input() syncflag: boolean;
  @Input() Checkcheck: boolean;
  @Input() islast: boolean;
  @Input() booleanvar: any;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() variabledataChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() CheckcheckChange: EventEmitter<boolean> = new EventEmitter();
  @Output() syncflagChange: EventEmitter<boolean> = new EventEmitter();
 operanta: any;
  operantb: any;
  addobject =  {
      text: "",
      value: 0
  };
  
  operantfa(num) {
      this.operanta = num;
      console.log("operanta " + this.operanta['text']);
      this.adddata();
  }
  
  operantfb(num) {
      this.operantb = num;
      this.adddata();
  }
  
   @Output()
      add: EventEmitter<any> = new EventEmitter();
      
      adddata() {
          this.addobject['text'] = "add(" + this.operanta['text']  + "," + this.operantb['text'] + ")" ;
          this.addobject['value'] = this._functionService.add(+this.operanta['value'],+this.operantb['value']);
      this.add.emit(this.addobject);
      this.variabledataChange.emit(this.variabledata);
      console.log(this.addobject.text + (this.operanta['value'] + this.operantb['value']));
      //this.visible = false;
    this.visibleChange.emit(this.visible);
    }

  ngOnInit() {
      console.log("add open");
      console.log(this.islast);
      console.log("add close");
  }


}
