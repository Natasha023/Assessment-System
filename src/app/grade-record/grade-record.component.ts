import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule,LocalDataSource } from 'ng2-smart-table';
import { GradeRecordService } from '../services/grade-record.service';

@Component({
  selector: 'app-grade-record',
  templateUrl: './grade-record.component.html',
  styleUrls: ['./grade-record.component.css']
})
export class GradeRecordComponent implements OnInit {

  source: LocalDataSource;

  columns=
  {
  //  add:{ 
  //    confirmCreate: true
   // },
  	columns: {
    studentName: {
      title: 'Student'
    },
    english: {
      title: 'English'
    },
    maths: {
      title: 'Maths'
    },
    science: {
      title: 'Science'
    },
    arts: {
      title: 'Arts'
    },
    overall:{
    	title:'Overall',
    	} 
    }
  };

	constructor(private gradeRecordService: GradeRecordService ){
  }

  ngOnInit() {
  	  this.gradeRecordService.getGradeData().subscribe((data) => {
     this.source.append(new LocalDataSource(data));
    });
  } 

  onSubmit(){

  }

  //onCreateConfirm(event):void { 
  //   event.confirm.resolve(this.source.append(event.newData));
  //}

  ngAfterViewInit() {
	document.getElementsByClassName('studentName')['0'].style.width = '150px';
	}

}
