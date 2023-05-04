import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageHeaderModule,LoaderModule} from '../../shared';
import { ListComponent } from './components';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ChartsModule } from 'ng2-charts'


@NgModule({
    imports: [CommonModule, DashboardRoutingModule,PageHeaderModule,LoaderModule,ChartsModule],
    declarations: [DashboardComponent, ListComponent]
})
export class DashboardModule {}
