import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routedComponents, DashboardRoutingModule } from './dashboard-routing.module';
import { ReactiveFormsModule, FormsModule } from '../../../../node_modules/@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
    ],
    providers: [],
    declarations: [routedComponents]
})

export class DashboardModule { }
