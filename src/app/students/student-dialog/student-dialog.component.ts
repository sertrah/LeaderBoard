import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.css']
})
export class StudentDialogComponent implements OnInit {

  constructor(private studentServiceService: StudentServiceService) { }

  ngOnInit() {
  }
  saveStudent(fullName, photoUrl) {
    this.studentServiceService.createStudent(fullName, photoUrl).subscribe(console.log);

  }

}
