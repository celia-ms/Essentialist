import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';
import { paths } from 'src/app/shared/paths';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent implements OnInit {
  selectedLanguage!: any;

  languages: any = [];

  isDark = false;

  constructor(
    private router: Router,
    private translation: TranslationService
  ) {}

  ngOnInit(): void {
    this.languages = this.translation.getLanguages();
    this.selectedLanguage = this.translation.getDisplayLanguage();
  }

  changeLanguage() {
    this.translation.changeLanguage(this.selectedLanguage.abbreviation);
  }
}
