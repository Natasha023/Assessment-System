import { Component, OnInit } from '@angular/core';
import { GradeRecordService } from '../services/grade-record.service';
import { StudentGrades } from '../models/student-grades';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent implements OnInit {

 studentGrades: StudentGrades[];
 constructor(private gradeRecordService: GradeRecordService ){}

  ngOnInit() {
  } 

  onSearch(){
    var studentName=<HTMLInputElement>document.getElementById('search');
  	this.gradeRecordService.getStudentGradesByName(studentName.value.toString())
  	.subscribe(data => 
      this.studentGrades=data);
  }

}
