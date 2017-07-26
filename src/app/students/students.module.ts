import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

import {MdSlideToggleModule, MdSortModule, MdInputModule, MdButtonModule, MdDialogModule, MdProgressBarModule} from '@angular/material';


import { HttpModule } from '@angular/http';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';
import { StudentServiceService } from './student-service.service';
import { DialogComponent } from './dialog/dialog.component';
import { HighlightDirective } from './highlight.directive';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/cj5bcndvub43c0113rk3ts7c8'
  }),
});
export function provideClient(): ApolloClient {
  return client;
}
@NgModule({
  imports: [
    CommonModule,
    ApolloModule.forRoot(provideClient),
    HttpModule,
    MdSlideToggleModule,
    MdSortModule,
    FormsModule,
    MdInputModule,
    MdButtonModule,
    MdDialogModule,
    MdProgressBarModule
  ],
  providers: [StudentServiceService],
  declarations: [StudentsComponent, StudentDetailComponent, DialogComponent, HighlightDirective, StudentDialogComponent],
  exports: [StudentsComponent],
  entryComponents: [DialogComponent, StudentDialogComponent]

})
export class StudentsModule { }

