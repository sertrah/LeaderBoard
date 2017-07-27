import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';
import { MdDialog } from '@angular/material';
@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.css']
})
export class StudentDialogComponent implements OnInit {

  constructor( public dialog: MdDialog, private studentServiceService: StudentServiceService) { }

  ngOnInit() {
  }
  saveStudent(fullName, photoUrl) {
    this.studentServiceService.createStudent(fullName, photoUrl).subscribe(console.log);
     this.dialog.closeAll();
  }

}
