import { 
	Component,
	OnInit, 
	Input, 
	Output, 
	OnChanges, 
	EventEmitter, 
	trigger, 
	state, 
	style, 
	animate, 
	transition 
} from '@angular/core';
import { PageService } from '../page/page.service';

@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.css'],
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

export class MultiplyComponent implements OnInit {
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
	multiplyobject =  {
	  text: "",
	  value: 0
	};
  
	operantfa(num) {
	  this.operanta = num;
	  this.multiplydata();
	}
  
	operantfb(num) {
	  this.operantb = num;
	  this.multiplydata();
	}
  
	@Output()
		multiply: EventEmitter<any> = new EventEmitter();

	multiplydata() {
		this.multiplyobject['text'] = "multiply(" + this.operanta['text']  + "," + this.operantb['text'] + ")" ;
		this.multiplyobject['value'] = this._functionService.multiply(this.operanta['value'],this.operantb['value']);
		this.multiply.emit(this.multiplyobject);
		console.log(this.multiplyobject.text + (this.operanta['value'] * this.operantb['value']));
				//this.visible = false;
		this.visibleChange.emit(this.visible);
	}
	
	ngOnInit() {
	    
	}
	
	
}