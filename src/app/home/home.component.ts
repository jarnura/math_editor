import { Component, OnInit, Output, EventEmitter, Input, OnChanges,SimpleChanges, DoCheck, Renderer, ElementRef, ViewChild, ViewEncapsulation, AfterViewInit   } from '@angular/core';
import { Select2OptionData } from 'ng2-select2';

declare var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterViewInit  {
    
//     $("#name").on('input', function () {
//     var val = this.value;
//     if($('#allNames option').filter(function(){
//         return this.value === val;        
//     }).length) {
//         //send ajax request
//         alert(this.value);
//     }
// });

// $(this.hiddenInput1.nativeElement).on('change', (e) => {
//       console.log('Change made -- ngAfterViewInit');
//       this.onChange(e);
//     });
//   }

//   onChange(): void{
//     console.log('Change made -- onChange');
//   }

    
    stateListData = [{ "name": "add", "id": 0 },
    { "name": "sub", "id": 1 },
    { "name": "multiply", "id":  2 }, 
    { "name": "division", "id": 3 }, 
    { "name": "powerof", "id": 4 }, 
    { "name": "sqrt", "id": 5 }
];
  stateList= { "name": "", "id": 0 };
  typeAheadSetup = {
    customTemplate: '<div> {{item.name}}</div>',
    //    timeDelay: number;
   // type: 'static', //static || dynamic default dynamic
    placeHolder: 'Enter a value/func/var',
    textPrperty: 'name',
   // valueProperty: 'abbreviation',
    searchProperty: 'name',
    isMultiselect: false,
    onSelect: (selectedItem: any) => { 
        this.changedtopic(selectedItem.name);
        console.log(selectedItem) 
    },
    asynchDataCall: (value: string, cb: any) => {
      let result = this.stateListData.filter((item: any) => {
        return item.name.indexOf(value) !== -1;
      });
      setTimeout(() => {
        cb(result);
      }, 200);
    },
    //    staticDataFilterkey: any;
    //staticData: stateListData
  }
    

@ViewChild('inputhome') inputhome:ElementRef;
@ViewChild('example') optioninput:ElementRef;



  constructor(private renderer:Renderer, private _elm:ElementRef) {
      console.log("constructor");
      this.haschild = false;
      
  }
  initial: boolean;
  inputvar: any;
  returned: boolean;
  equationvisible: boolean;
  t1: string;
  haschild = false;
  public exampleData: Array<Select2OptionData>;
  data = {
    add : false,
    sub : false,
    multiply : false,
    division : false,
    powerof : false,
    sqrt : false,
    value: false,
    display: false,
  };
  
  displayobj = {
    text: "",
    value: 0
  };
  
  makeinputcheck = false;
  makeinput() {
     
      
      console.log("makeinput t1 " + this.t1);
      this.data[this.t1] = false;
      this.returned = false;
      this.initial = false;
      
     
  }
  syncdata() {
      console.log("1" + this.dochangebool + "2" + this.syncflag + "3" + this.Checkcheck );
       if(this.dochangebool && this.cc1 && this.cc2 ) {
          this.makeinputcheck = true;
          console.log("Check sync click 1");
          let event = new MouseEvent('dblclick', {bubbles: true});
             this.renderer.invokeElementMethod(
             this.inputhome.nativeElement, 'dispatchEvent', [event]);
             
      }
       this.dochangebool = false;
       this.cc1 = false;
     //  this.CheckcheckChange.emit(false);
       
  }
  makedropdown() {
      this.initial = false;
      this.returned = false;
      this.data[this.t1] = false;
  }
  
  @Input() variabledata1: number;
  @Input() variabledata: any;
  @Input() myNum: number;
  @Input() syncflag: boolean;
  @Input() Checkcheck: boolean;
  @Input() islast: boolean;
  @Output() outputemit: EventEmitter<any> = new EventEmitter();
  @Output() variabledataChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() synccheck: EventEmitter<boolean> = new EventEmitter();
  @Output() CheckcheckChange: EventEmitter<boolean> = new EventEmitter();
  @Output() syncflagChange: EventEmitter<boolean> = new EventEmitter();
  cc1: boolean;
  cc2: boolean;
  
  public changedtopic(e: any): void {
   
      this.cc2 = false;
      this.returned = true;
      this.haschild = true;
        console.log("e " + e);
        this.t1 = e.toString();
        if(typeof this.data[this.t1] === 'undefined') {
            if(typeof this.variabledata[this.t1] === 'undefined') {
                this.haschild = false;
                console.log("value");
                this.displayobj['text'] = this.t1;
                this.displayobj['value'] = +this.t1;
                this.t1 = "value";
                this.onCreateContent(this.displayobj);
            }
            else{
                this.haschild = false;
                console.log("varilable");
                this.displayobj['text'] = "(" + this.t1 + ")";
                this.displayobj['value'] = this.variabledata[this.t1];
                this.t1 = "value";
                this.onCreateContent(this.displayobj);
            }
        }
            
            else{
            console.log( this.t1);
            
            this.data[this.t1]=true;
            console.log(this.data[this.t1]);
            console.log(this.data);
            }
    }
    ngOnChanges(changes: SimpleChanges) {
        //this.syncflag = false;
        // only run when property "data" changed
        // if (changes['myNum']) {
        //     console.log("ngOnChanges " + this.myNum);
        // }
        if (changes['variabledata1']) {
            console.log(this.variabledata);
        }
    }
    
    dochangebool = false;
    ngDoCheck() {
  
    
        console.log(this.variabledata);
        this.dochangebool = true;
        this.cc1 = this.syncflag;
        this.cc2 = this.Checkcheck;
        //this.Checkcheck = this.syncflag;
        this.syncdata();
        if(this.islast){
    this.syncflagChange.emit(false);
    this.CheckcheckChange.emit(false);
         }
    }
    val: any;
    prev: any;
    cc = false;
    ngAfterViewInit() {
        var self = this;
                $(this.inputhome.nativeElement).on('input',function(e){
                 self.val = $(this).val();
                 if(typeof self.val != 'undefined' && typeof self.prev != 'undefined' && (self.val.length - self.prev.length) > 1 )
                 self.cc = true;
                 if(self.cc){
                    self.changedtopic(self.val);
                    self.cc = false;
                }
                 self.prev =self.val;
                 
                });
                
                
}
    
    

  ngOnInit() {
      console.log("homecomponent varilable data " + this.variabledata);
      this.variabledataChange.emit(this.variabledata);
      this.initial = false;
      this.returned = false;
      this.equationvisible = true;
      console.log(this.initial);
      console.log(this.returned);
      console.log(this.equationvisible);
    this.exampleData = [
        
      {
        id: 'add',
        text: 'add'
      },
      {
        id: 'sub',
        text: 'sub'
      },
      {
        id: 'multiply',
        text: 'multiply' 
      },
      {
        id: 'division',
        text: 'division' 
      },
      {
        id: 'powerof',
        text: 'powerof' 
      },
      {
        id: 'sqrt',
        text: 'sqrt' 
      }
    ];
  }
  onCreateContent(data): void {
      //this.Check.emit(this.makeinputcheck);
      //if(!this.makeinputcheck){
          this.returned = true;
          this.equationvisible = false;
     // }
     // this.makeinputcheck=false;
      
      this.displayobj = data;
       console.log(this.displayobj['value'] + this.displayobj['text']);
      this.outputemit.emit(this.displayobj);
     // this.variabledataChange.emit(this.variabledata);
       
             console.log("data " + data);
  }

}
