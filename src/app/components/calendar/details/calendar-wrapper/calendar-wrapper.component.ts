import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-wrapper',
  templateUrl: './calendar-wrapper.component.html',
  styleUrls: ['./calendar-wrapper.component.scss']
})
export class CalendarWrapperComponent implements OnInit {

  options = [
    { id: 1, name: 'День' },
    { id: 2, name: 'Год' },
    { id: 3, name: 'Период' },
  ];
  selectedOption: MyOption = this.options[0];

  constructor() { }

  ngOnInit(): void {
  }

  selectOption(option: MyOption) {
    this.selectedOption = option;
  }

}


interface MyOption {
  id: number;
  name: string;
}