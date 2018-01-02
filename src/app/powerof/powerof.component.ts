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
  selector: 'app-powerof',
  templateUrl: './powerof.component.html',
  styleUrls: ['./powerof.component.css'],
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
export class PowerofComponent implements OnInit {

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
	powerofobject =  {
	  text: "",
	  value: 0
	};
  
	operantfa(num) {
	  this.operanta = num;
	  this.powerofdata();
	}
  
	operantfb(num) {
	  this.operantb = num;
	  this.powerofdata();
	}
  
	@Output()
		powerof: EventEmitter<any> = new EventEmitter();

	powerofdata() {
		this.powerofobject['text'] = "powerof(" + this.operanta['text']  + "," + this.operantb['text'] + ")" ;
		this.powerofobject['value'] = Math.pow(this.operanta['value'], this.operantb['value']);
		this.powerof.emit(this.powerofobject);
		this.visibleChange.emit(this.visible);
	}
	
	ngOnInit() {
	    
	}

}