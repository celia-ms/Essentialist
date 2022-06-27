import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
  isDashboard: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isDashboard = this.router.url === '/' ? true : false;
  }
}
