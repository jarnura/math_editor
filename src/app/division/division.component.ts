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
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css'],
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
export class DivisionComponent implements OnInit {

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
  @Output() syncflagChange: EventEmitter<boolean> =  new EventEmitter();

	operanta: any;
  operantb: any;
	divisionobject =  {
	  text: "",
	  value: 0
	};
  
	operantfa(num) {
	  this.operanta = num;
	  this.divisiondata();
	}
  
	operantfb(num) {
	  this.operantb = num;
	  this.divisiondata();
	}
  
	@Output()
		division: EventEmitter<any> = new EventEmitter();

	divisiondata() {
		this.divisionobject['text'] = "division(" + this.operanta['text']  + "," + this.operantb['text'] + ")" ;
		this.divisionobject['value'] = this._functionService.divide(this.operanta['value'],this.operantb['value']);
		this.division.emit(this.divisionobject);
		console.log(this.divisionobject.text + (this.operanta['value'] / this.operantb['value']));
				//this.visible = false;
		this.visibleChange.emit(this.visible);
	}
	
	ngOnInit() {
	    
	}

}