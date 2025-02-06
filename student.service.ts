import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Student {
  id: number;
  name: string;
  age: number;
  class: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [ { id: 1, name: 'John', age: 20, class: 'CS101', phone: '123-456-7890' },
    { id: 2, name: 'Smith', age: 29, class: 'CS134', phone: '287-654-3210' },
    { id: 2, name: 'Ricky', age: 21, class: 'CS13', phone: '907-654-3210' },
    { id: 2, name: 'Joel', age: 20, class: 'CS155', phone: '345-654-3210' },];

  constructor() { }

  getStudents(): Observable<Student[]> {
    return of(this.students);
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  getStudent(id: number): Observable<Student | undefined> {
    return of(this.students.find(student => student.id === id));
  }

  updateStudent(id: number, updatedStudent: Student): void {
    const index = this.students.findIndex(student => student.id === id);
    if (index !== -1) {
      this.students[index] = updatedStudent;
    }
  }

  deleteStudent(id: number): void {
    this.students = this.students.filter(student => student.id !== id);
  }

  searchStudent(name: string): Observable<Student[]> {
    return of(this.students.filter(student => student.name.toLowerCase().includes(name.toLowerCase())));
  }
}
