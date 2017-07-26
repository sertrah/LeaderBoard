
import { Component, NgZone, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StudentServiceService } from './student-service.service';
import { Sort } from '@angular/material/typings';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Student } from './student';

import { StudentDialogComponent } from './student-dialog/student-dialog.component';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';



@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  columnTitle = [];
  sortedData: Student[];
  starStudent;
  slideStatus: Student[];
  temp: Student[];
  @ViewChild('filter') filter: ElementRef;
  constructor(private router: Router, public dialog: MdDialog, private studentService: StudentServiceService, private ngZone: NgZone) { }

  ngOnInit() {
    this.studentService.getAllStudents().subscribe(({ data, loading }: any) => {
      // cache our list
      this.temp = [...data.allStudents];
      this.sortedData = data.allStudents.slice();
      this.starStudent = data.allStudents.filter((x) => x.avarageGrade >= 4).sort((x, b) => {
        if (x.avarageGrade < b.avarageGrade) {
          return 1;
        }
        if (x.avarageGrade > b.avarageGrade) {
          return -1;
        }
        return 0;
      }).slice(0, 3);
    });
    this.columnTitle = [
      { prop: 'photoUrl', name: ' ', width: '32px' },
      { prop: 'fullName', name: 'FullName', width: 'auto' },
      { prop: 'avarageGrade', name: 'Avarage Grade', width: 'auto' },
      { prop: 'deliveredHomework', name: '# of Delivered Homeworks', width: 'auto' },
      { prop: 'missingHomework', name: '# of Missing Homeworks', width: 'auto' },
      { prop: 'updatedAt', name: 'date updated', width: 'auto' },
      { prop: 'del', name: ' ', width: 'auto' }
    ];
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe(() => {
        if (this.filter.nativeElement.value) {
          this.sortedData = this.temp.filter((x) => x.fullName.search(this.filter.nativeElement.value) >= 0).map((x) => {
            return x;
          });
        } else {
          this.sortedData = this.temp;
        }
      });
  }
  show(event) {
    if (!event.checked) {
      this.columnTitle = [
        { prop: 'photoUrl', name: ' ', width: '32px' },
        { prop: 'fullName', name: 'FullName', width: 'auto' },
        { prop: 'avarageGrade', name: 'Avarage Grade', width: 'auto' },
        { prop: 'deliveredHomework', name: '# of Delivered Homeworks', width: 'auto' },
        { prop: 'missingHomework', name: '# of Missing Homeworks', width: 'auto' },
        { prop: 'updatedAt', name: 'date updated', width: 'auto' },
        { prop: 'del', name: ' ', width: 'auto' }
      ];

    } else {
      this.columnTitle = [
        { prop: 'photoUrl', name: ' ', width: '32px' },
        { prop: 'fullName', name: 'FullName', width: 'auto' },
        { prop: 'avarageGrade', name: 'Avarage Grade', width: 'auto' },
        { prop: 'updatedAt', name: 'date updated', width: 'auto' },
        { prop: 'del', name: ' ', width: 'auto' }
      ];
    }
    this.slideStatus = event.checked;
  }
  detailStudent(selected) {
    this.router.navigate(['/detail/' + selected.id]);
  }
  deleteStudent(id) {
    this.studentService.delStudent(id).subscribe(console.log);
  }
  openDialogCreateStudent(typeWindow) {

    const dialogRef = this.dialog.open(StudentDialogComponent, {
      data: typeWindow,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log();
    });
  }
  sortData(sort: Sort) {
    const data = this.sortedData.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'fullName': return compare(a.fullName, b.fullName, isAsc);
        case 'updatedAt': return compare(+a.updatedAt, +b.updatedAt, isAsc);
        case 'avarageGrade': return compare(+a.avarageGrade, +b.avarageGrade, isAsc);
        case 'deliveredHomework': return compare(+a.deliveredHomework, +b.deliveredHomework, isAsc);
        case 'missingHomework': return compare(+a.missingHomework, +b.missingHomework, isAsc);
        default: return 0;
      }
    });
  }

}
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
