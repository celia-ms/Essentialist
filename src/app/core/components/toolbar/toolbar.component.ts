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

  isDark = false;

  constructor(private translation: TranslationService) {}

  ngOnInit(): void {
    this.languages = this.translation.getLanguages();
    this.selectedLanguage = this.translation.getDisplayLanguage();
  }

  changeLanguage() {
    this.translation.changeLanguage(this.selectedLanguage.abbreviation);
  }
}
