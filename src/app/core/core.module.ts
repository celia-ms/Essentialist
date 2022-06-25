import { NgModule } from '@angular/core';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LayoutComponent, FooterComponent, ToolbarComponent],
  imports: [RouterModule, BrowserAnimationsModule, SharedModule],
})
export class CoreModule {}
