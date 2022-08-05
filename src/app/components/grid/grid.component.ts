import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit {
  mybreakpoint: number = 1;

  constructor() {}

  ngOnInit(): void {
    this.mybreakpoint = window.innerWidth <= 600 ? 1 : 6;
  }

  handleSize(event: any) {
    this.mybreakpoint = event.target.innerWidth <= 600 ? 2 : 6;
  }
}
