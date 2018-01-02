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
  selector: 'app-squareroot',
  templateUrl: './squareroot.component.html',
  styleUrls: ['./squareroot.component.css'],
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
export class SquarerootComponent implements OnInit {

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
	squarerootobject =  {
	  text: "",
	  value: 0
	};
  
	operantfa(num) {
	  this.operanta = num;
	  this.squarerootdata();
	}
  
	@Output()
		squareroot: EventEmitter<any> = new EventEmitter();

	squarerootdata() {
		this.squarerootobject['text'] = "squareroot(" + this.operanta['text'] + ")" ;
		this.squarerootobject['value'] = Math.sqrt(this.operanta['value']);
		this.squareroot.emit(this.squarerootobject);
		this.visibleChange.emit(this.visible);
	}
	
	ngOnInit() {
	    
	}

}