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

    const newScore = +score;
     this.studentServiceService.createResultStudent(this.data.id, taskName, newScore, description).subscribe(
       (student: any) => {
         const results = this.data.studentResultses;
         const sumOfScores = Object.keys(results).reduce((sum, key) => sum + results[key].score, 0) + student.data.createStudentResults.score;
         const avarageGrade = sumOfScores / (results.length + 1);
         const newDeliverdHomework = 1 + this.data.deliveredHomework;
         const newMissingdHomework = this.data.missingHomework - 1;
         this.studentServiceService.updResultStudent(this.data.id, avarageGrade, newDeliverdHomework, newMissingdHomework).subscribe();
         this.dialog.closeAll();
       }
     );
  }

}
