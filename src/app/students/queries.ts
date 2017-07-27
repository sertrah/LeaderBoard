import gql from 'graphql-tag';
// We use the gql tag to parse our query string into a query document

export class Queries {
    static getAllStudents = gql`
        query StudenQuery{
        allStudents{
            id
            fullName
            photoUrl
            avarageGrade
            deliveredHomework
            missingHomework
            updatedAt
        }
        }
    `;
    static createStudent = gql`
        mutation StudenQuery($fullName: String!, $photoUrl: String!){
        createStudent(fullName: $fullName , photoUrl: $photoUrl){
            fullName
            photoUrl
        }
        }
    `;
    static getStudent = gql`
        query StudentQuery($id: ID!) {
            Student(id: $id) {
            id
            fullName
            photoUrl
            avarageGrade
            deliveredHomework
            missingHomework
            updatedAt
            studentResultses{
              id,
              taskName,
              score,
              description
            }
            }
        }
    `;
    static createStudentResult = gql`
        mutation createStudentResults($id: ID!, $taskName: String! , $score: Float, $description: String) {
        createStudentResults(studentId: $id, taskName: $taskName , score: $score, description: $description){
            taskName
            score
            description
        }
        }
    `;
static updStudent = gql`
    mutation updateStudent($id: ID!, $missingHomework: Int , $deliveredHomework: Int, $avarageGrade: Float, $fullName: String) {
    updateStudent(id: $id, missingHomework: $missingHomework , deliveredHomework: $deliveredHomework, avarageGrade: $avarageGrade, fullName: $fullName){
        id
        deliveredHomework
        missingHomework
        avarageGrade
        fullName
    }
    }
`;
    static delStudentResult = gql`
    mutation deleteStudentResults($id: ID!) {
        deleteStudentResults(id: $id){
        id
        }
    }
    `;
    static delStudent = gql`
    mutation deleteStudent($id: ID!) {
        deleteStudent(id: $id){
        id
        }
    }
    `;
}
