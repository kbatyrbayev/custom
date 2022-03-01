import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infin-scroll',
  templateUrl: './infin-scroll.component.html',
  styleUrls: ['./infin-scroll.component.scss']
})
export class InfinScrollComponent implements OnInit {

  array: string[] = [];
  sum = 100;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = "";
  modalOpen = false;

  constructor() {
    this.appendItems(0, this.sum);
  }

  ngOnInit(): void {

  }

  addItems(startIndex: any, endIndex: any, _method: any) {
    console.log(startIndex, endIndex, _method, 'in');
    for (let i = 0; i < this.sum; ++i) {
      let item = i + " item";
      this.array.push(item);
    }
    console.log(this.array);
  }

  appendItems(startIndex: any, endIndex: any) {
    this.addItems(startIndex, endIndex, "push");
  }

  prependItems(startIndex: any, endIndex: any) {
    this.addItems(startIndex, endIndex, "unshift");
  }

  onScrollDown(ev: any) {
    console.log("scrolled down!!", ev);

    // add another 20 items
    const start = this.sum;
    this.sum += 20;
    this.appendItems(start, this.sum);

    this.direction = "down";
  }

  onUp(ev: any) {
    console.log("scrolled up!", ev);
    const start = this.sum;
    this.sum += 20;
    this.prependItems(start, this.sum);
    this.direction = "up";
  }

  toggleModal() {
    this.modalOpen = !this.modalOpen;
  }
}
