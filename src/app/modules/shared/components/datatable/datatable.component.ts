import { Component, OnInit, Input, ViewChild, OnChanges, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatSort, MatTable, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
//import { Registration } from '../../models/registration';
//import { DialogComponent } from '../dialog/components/dialog/dialog.component';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit, OnChanges {
  @Input() data: any[];
  @Input() displayColumns: string[];
  @Output() ApprovedData = new EventEmitter();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;

  dataSource = new MatTableDataSource<any>(this.data);
  selection = new SelectionModel<any>(true, []);

  dialogdata: any;

  constructor(public dialog: MatDialog) { }

  // openDialog($event) {
  //   //$event.stopPropagation();

  //   console.log('list action clicked', $event);
  //   setTimeout(() => {
  //     const dialogRef = this.dialog.open(DialogComponent);

  //     dialogRef.afterClosed().subscribe(result => {

  //       this.dialogdata = result;



  //       console.log(`Dialog result: ${result}`);

  //     });
  //     console.log('selectedlist', this.selection.selected);


  //   }, 300);



  // }



  ngOnInit() { }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  ngOnChanges() {
    if (this.data) {
      this.dataSource.data = this.data;
    }
    this.displayColumns = [...this.displayColumns];

  }
  // onListActionClick($event) {
  //   $event.stopPropagation();
  //   console.log('list action clicked', $event);
  // }

  // ApprovedRegistration() {


  //   this.ApprovedData.emit(this.selection.selected);
  //   this.selection.clear();
  // }
}
