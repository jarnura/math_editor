import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor() { }
  line = 0;
   list: Object[] = [];
   variable: Object[] = [];
   variablemap = {
       text: 0,
   };
   tempvar: string;
  addline(newline: boolean) {
      if(newline)
        this.line++;
        this.list.push(this.line);
        console.log(this.list);
  }
  
  assignvalue(data): void {
      this.variablemap['this.tempvar'] = data;
      console.log("page la value " + data);
      console.log("variable " + this.variablemap['this.tempvar']);
  }
  
  variableid(data) {
      this.tempvar = data;
      console.log(data);
  }
  ngOnInit() {
  }

}
