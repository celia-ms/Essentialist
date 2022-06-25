import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';

const MATERIAL_COMPONENTS = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatTabsModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatCardModule,
  MatExpansionModule,
  MatGridListModule,
];
@NgModule({
  declarations: [],
  imports: [CommonModule, MATERIAL_COMPONENTS],
  exports: [MATERIAL_COMPONENTS],
})
export class MaterialModule {}
