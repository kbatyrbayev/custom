import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-c-month-dropdown',
  templateUrl: './c-month-dropdown.component.html',
  styleUrls: ['./c-month-dropdown.component.scss']
})
export class CMonthDropdownComponent implements OnInit {

  isOpen = false;

  @Input() list: ICDropdown[] = [];

  @Input() selectedItem: ICDropdown | undefined;
  @Output() selectedItemChange = new EventEmitter<ICDropdown>();

  constructor() { }

  ngOnInit(): void {
  }

  selectItem(item: ICDropdown) {
    this.selectedItem = item;
    this.selectedItemChange.emit(item);
    this.isOpen = false;
  }


}

export interface ICDropdown {
  id: number;
  name: string;
}
