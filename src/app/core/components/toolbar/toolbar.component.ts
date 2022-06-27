import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent implements OnInit {
  selectedLanguage!: any;

  languages: any = [];

  counter: string = '';

  constructor(
    private router: Router,
    private translation: TranslationService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.counter = '1';
    }, 2000);
    this.languages = this.translation.getLanguages();
    this.selectedLanguage = this.translation.getDisplayLanguage();
  }

  changeLanguage() {
    this.translation.changeLanguage(this.selectedLanguage.abbreviation);
  }

  navigateToDashboard() {
    this.router.navigate([`/`]);
  }
}
