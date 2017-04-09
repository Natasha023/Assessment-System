import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AuthGuard } from '../guard/auth.guard';
import { GradeRecordComponent } from '../grade-record/grade-record.component';
import { SearchStudentComponent } from '../search-student/search-student.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(appRoutes);