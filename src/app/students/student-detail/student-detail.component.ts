import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Location } from '@angular/common';
import { StudentServiceService } from '../student-service.service';

import { MdDialog, MdDialogRef } from '@angular/material';
import { DialogComponent } from './../dialog/dialog.component';
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  student;
  lenghtResult ;
  constructor(private route: ActivatedRoute,
    private location: Location,
    private studentService: StudentServiceService,
    public dialog: MdDialog) { }

  ngOnInit() {

    this.route.paramMap.subscribe((params: Params) => {
      this.studentService.getStudent(params.get('id')).subscribe(({ data, loading }: any) => {
        this.student = data.Student;
        this.lenghtResult  = data.Student.studentResultses.length > 4 ? true : false;
      });
    });

  }
  goBack(): void {
    this.location.back();
  }
  updNameStudent(fullName) {
      this.studentService.updStudent(this.student.id, fullName).subscribe(console.log);
  }
  openDialog() {

    const dialogRef = this.dialog.open(DialogComponent, {
      data: this.student,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log();
    });
  }
  editStudent(fullName) {
    this.studentService.updStudent(this.student.id, fullName).subscribe(console.log);
  }
}
