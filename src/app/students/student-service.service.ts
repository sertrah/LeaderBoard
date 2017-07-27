import { Observable } from 'rxjs/Rx';
import { ApolloQueryResult } from 'apollo-client/core/types';
import { ApolloQueryObservable } from 'apollo-angular/build/src';

import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Queries } from './queries';

@Injectable()
export class StudentServiceService {

  constructor(private apollo: Apollo) { }
  getAllStudents(): ApolloQueryObservable<any> {
    return this.apollo.watchQuery({
      query: Queries.getAllStudents,
      pollInterval: 1000
    });
  }
  getStudent(id) {
    return this.apollo.watchQuery({
      query: Queries.getStudent,
      pollInterval: 1000,
      variables: {id}
    });
  }
  createResultStudent(id, taskName, score: number , description): Observable<ApolloQueryResult<{}>> {
    return this.apollo.mutate({
      mutation: Queries.createStudentResult,
      variables: {id, taskName, score , description}
    });
  }
  createStudent(fullName, photoUrl): Observable<ApolloQueryResult<{}>> {
    return this.apollo.mutate({
      mutation: Queries.createStudent,
      variables: {fullName, photoUrl}
    });
  }
  updStudent(id, fullName ): Observable<ApolloQueryResult<{}>> {
    return this.apollo.mutate({
      mutation: Queries.updStudent,
      variables: {id, fullName}
    });
  }
  updResultStudent(id, avarageGrade?, deliveredHomework?, missingHomework? ): Observable<ApolloQueryResult<{}>> {
    return this.apollo.mutate({
      mutation: Queries.updStudent,
      variables: {id, missingHomework, deliveredHomework , avarageGrade}
    });
  }
  delStudenResult(id): Observable<ApolloQueryResult<{}>>  {
    return this.apollo.mutate({
      mutation: Queries.delStudentResult,
      variables: {id}
    });
  }
  delStudent(id): Observable<ApolloQueryResult<{}>>  {
    return this.apollo.mutate({
      mutation: Queries.delStudent,
      variables: {id}
    });
  }
}
