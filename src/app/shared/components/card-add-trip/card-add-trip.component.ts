import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-add-trip',
  templateUrl: './card-add-trip.component.html',
  styleUrls: ['./card-add-trip.component.scss'],
})
export class CardAddTripComponent implements OnInit {
  @Output() addClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
