// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { SearchStudentComponent } from './search-student/search-student.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

export const routes: Routes = [
  /* { path: '', redirectTo: '/students', pathMatch: 'full' }, */
  { path: '', component: StudentListComponent },
  { path: 'add', component: AddStudentComponent },
  { path: 'edit/:id', component: EditStudentComponent },
  { path: 'search', component: SearchStudentComponent }
];
