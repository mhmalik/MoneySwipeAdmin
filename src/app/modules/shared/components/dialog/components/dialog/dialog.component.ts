import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormGroup } from "@angular/forms";
// import { RejectedreasonsService } from 'src/app/modules/shared/services/rejectedreasons.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Input() reasons: any[];
  form: FormGroup;
  //reasons;
  reasonID: string;

  constructor(private dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    // this.reasons = rejectedReason.getRejectedReasons();
    //console.log(this.reasons);
    //this.getReasons();
  }

  ngOnInit() {
  }

  // getReasons() {
  //   this.rejectedReason.getRejectedReasons().subscribe(
  //     (res: any) => {
  //       this.reasons = res;

  //     },
  //     (error: any) => { },
  //     () => { }
  //   );
  // }

}
