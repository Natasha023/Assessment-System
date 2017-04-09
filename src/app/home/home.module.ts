
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import { GradeRecordComponent } from '../grade-record/grade-record.component';
import { SearchStudentComponent } from '../search-student/search-student.component';
import { HomeRoutingModule } from './home.routing';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [
    GradeRecordComponent,
    SearchStudentComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    HomeRoutingModule,
    Ng2SmartTableModule,
    BrowserModule,
    CommonModule
  ],
  providers: [
  ]
})
export class HomeModule { }
