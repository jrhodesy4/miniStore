import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListOrderComponent implements OnInit {
  @Input() orders;

  constructor() { }

  ngOnInit() {
  }

}
