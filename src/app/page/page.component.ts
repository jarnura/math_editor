import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, Renderer, ElementRef, ViewChild } from '@angular/core';
import { PageService } from './page.service';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
    @ViewChild('addnewline') addnewline:ElementRef;
numVal: number;
  constructor( 
      private _functionService: PageService,
      private renderer:Renderer
      ) { }
  line = 0;
  val: string;
   list: Object[] = [];
   variable: Object[] = [];
   inputarray: boolean[] = [];
   inputarray2: boolean[] = [];
   indexid: number;
   variablemap1: number = 0;
   variablemap = {
       text: 0,
   };
   
   
   functionname: string;
   functionvisible = {
       subract : true,
   }
   
   setfunction(data) {
       console.log(data);
       this.functionvisible[data] = false;
   }
   variablevalue: any;
   tempvar: string;
  addline(newline: boolean) {
      if(newline)
        this.line++;
        this.inputarray.push(false);
        console.log(this.inputarray2);
        this.inputarray2[this.inputarray2.length-1] = false;
        this.inputarray2.push(true);
        this.list.push(this.line);
        console.log(this.list);
  }
  syncflag: boolean = false;
  syncflag2: boolean = false;
//   setCheck(data) {
//       this.syncflag = data;
//   }

// setsync(boole){
//     this.syncflag = boole;
// }
  
  makeinput(num) {
      this.inputarray[num] = false;
      console.log("mouseover");
  }
  
  releaseinput(data: string,num: number) {
      this.inputarray[num] = true;
      this.variablemap[data] = this.variablemap[this.tempvar]; 
      this.variablemap['text']++;
     // this.variabledataChange.emit(this.variablemap);
      console.log("mouseout");
  }
  adda() {
      this.variablemap1++;
  }
  selectvariable(data) {
      this.variablevalue = this.variablemap[data];
      console.log("selectvariable " + this.variablevalue + " " + data);
  }
  
  //noinput = false;
  assignvalue(data): void {
      
     // if(!this.syncflag)
     
     if(typeof this.tempvar === 'undefined') {
        // this.noinput = false;
        this.syncflag2 = false;
          this.syncflag2 = false;
     }
     else{
      this.inputarray[this.indexid] = true;
      if(typeof this.variablemap[this.tempvar] === 'undefined') {
          this.syncflag2 = false;
          this.syncflag2 = false;
      }
      else {
          this.syncflag2 = true;
          this.syncflag = true;
      }
      this.variablemap[this.tempvar] = data['value'];
      this.variablemap['text']++;
      //this.variabledataChange.emit(this.variablemap);
      console.log("page la value " + data);
      console.log("variable " + this.variablemap[this.tempvar]);
     }
  }
  
  variableid(data: string,id: number) {
      console.log("last line variableid " + this.inputarray2[id-1]);
      if(this.inputarray2[id-1] == true) {
          let event = new MouseEvent('click', {bubbles: true});
             this.renderer.invokeElementMethod(
             this.addnewline.nativeElement, 'dispatchEvent', [event]);
          //this.addline();
          console.log("last line ");
      }
      this.indexid = id;
      this.tempvar = data;
      console.log(data);
  }
  
  num1: number;
  num2: number;
  ouputvalue=-1;
  catchnum1(num) {
      this.num1 = num;
  }
  catchnum2(num) {
      this.num2 = num;
      this.ouputvalue = this._functionService.subract(this.num1,this.num2);
      console.log(this.ouputvalue);
  }
  
    
  ngOnInit() {
  }

}
