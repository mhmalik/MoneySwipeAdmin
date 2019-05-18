import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { DialogComponent } from './components/dialog/components/dialog/dialog.component';
import { MatTableModule, MatCheckboxModule, MatButtonModule, MatDialogModule, MatSelectModule } from '@angular/material';

const sharedComponents = [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DatatableComponent,
    DialogComponent
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        MatTableModule,
        MatCheckboxModule,
        MatButtonModule,
        MatDialogModule,
        MatSelectModule

    ],
    declarations: sharedComponents,
    exports: sharedComponents,
    entryComponents: [],
    providers: []
})
export class SharedModule { }