import { NgModule } from '@angular/core';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { appEffects, appReducers } from './store/app.state';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [LayoutComponent, FooterComponent, ToolbarComponent],
  imports: [
    RouterModule,
    BrowserAnimationsModule,
    SharedModule,
    StoreModule.forRoot(appReducers),
    !environment.production
      ? StoreDevtoolsModule.instrument({
          maxAge: 25,
          logOnly: environment.production,
        })
      : [],
    EffectsModule.forRoot(appEffects),
  ],
})
export class CoreModule {}
