import { NgModule } from '@angular/core';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
  declarations: [DashboardPage],
  imports: [DashboardRoutingModule, SharedModule, OwlModule],
})
export class DashboardModule {}
