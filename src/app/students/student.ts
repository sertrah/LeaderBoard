export interface Student {
    id?: any;
    fullName: string;
    photoUrl?: string;
    avarageGrade: number;
    deliveredHomework: number;
    missingHomework: number;
    studentResultses?: any[];
    updatedAt: Date;

}

export const columnStudent: any[] = [
      { prop: 'photoUrl', name: ' ', width: '32px'},
      { prop: 'fullName', name: 'FullName', width: 'auto' },
      { prop: 'avarageGrade', name: 'Avarage Grade', width: 'auto' },
      { prop: 'deliveredHomework', name: '# of Delivered Homeworks', width: 'auto' },
      { prop: 'missingHomework', name: '# of Missing Homeworks', width: 'auto' },
      { prop: 'updatedAt', name: 'date updated', width: 'auto'}
];
export const columnStudentShort: any[] = [
      { prop: 'photoUrl', name: ' ', width: '32px'},
      { prop: 'fullName', name: 'FullName', width: 'auto' },
      { prop: 'avarageGrade', name: 'Avarage Grade', width: 'auto' },
      { prop: 'updatedAt', name: 'date updated', width: 'auto' }
];
