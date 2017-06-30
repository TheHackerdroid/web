import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  
  //Ejemplo 1
  clickMessage = '';
  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
  //Ejemplo 2 - A
  valuesA = '';
  onKeyA(event: any) { // without type info
    this.valuesA += event.target.value + ' | ';
  }
  //Ejemplo 2 - B
  valuesB = '';
  onKeyB(event: any) { // without type info
    this.valuesB += event.key + ' | ';
  }
  //Ejemplo 2 - C
  valuesC = '';
  onKeyC(event: KeyboardEvent) { // with type info
    this.valuesC += (<HTMLInputElement>event.target).value + ' | ';
  }
  //Ejemplo 4
  valuesD = '';
  onKeyD(value: string) {
    this.valuesD += value + ' | ';
  }
  constructor() { }

  ngOnInit() {
  }

}
