import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routedComponents, UsersRoutingModule } from './user-routing.module';
import { ReactiveFormsModule, FormsModule } from '../../../../node_modules/@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { UserService } from './service/user.service';
import { CoreModule } from '../core';
import { HttpClientModule } from '@angular/common/http';
import { UserlistComponent } from './components/userlist/userlist.component';

@NgModule({
    imports: [
        CommonModule,
        UsersRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        HttpClientModule,
        CoreModule,


    ],
    providers: [UserService],
    declarations: [routedComponents, UserlistComponent]
})

export class UsersModule { }
