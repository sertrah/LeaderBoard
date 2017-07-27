import { Component, OnInit, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { StudentServiceService } from '../student-service.service';


interface Results {
  id?: string;
  taskName?: string;
  score?: number;
  description?: string;
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit {
  results: Results[] = [];
  constructor(public dialogRef: MdDialogRef<DialogComponent>,
    public dialog: MdDialog,
    private studentServiceService: StudentServiceService,
    @Inject(MD_DIALOG_DATA) private data: any) { }

  ngOnInit() {
  }
  createResult(taskName, score, description) {
    console.log(score);

  }

}
