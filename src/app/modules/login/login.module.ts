import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routedComponents, LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule, FormsModule } from '../../../../node_modules/@angular/forms';
import { CoreModule } from '../core';
import { SharedModule } from '../shared/shared.module';
// import { NgxLoadingModule } from 'ngx-loading';
// import { NgxMaskModule } from 'ngx-mask';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        CoreModule,
        SharedModule,
        // NgxLoadingModule.forRoot({}),
        // NgxMaskModule.forRoot({})
    ],
    providers: [],
    declarations: [routedComponents]
})

export class LoginModule { }