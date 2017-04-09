import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './home.component';
import { GradeRecordComponent } from '../grade-record/grade-record.component';
import { SearchStudentComponent } from '../search-student/search-student.component';
import { AuthGuard } from '../guard/auth.guard';

const homeRoutes: Routes = [
	{ 	path: '',
    	component: HomeComponent,
      canActivate: [AuthGuard],
    	children: [
      	{
        	path: 'graderecord',
        	component: GradeRecordComponent,
    	},
		
		{ 
			path: 'searchstudent', 
			component: SearchStudentComponent
		}
		]
	}];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }