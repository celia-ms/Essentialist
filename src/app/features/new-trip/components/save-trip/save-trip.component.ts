import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-save-trip',
  templateUrl: './save-trip.component.html',
  styleUrls: ['./save-trip.component.scss'],
})
export class SaveTripComponent implements OnInit {
  @Input('title') title: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToDashboard() {
    this.router.navigate([`/`]);
  }
}
