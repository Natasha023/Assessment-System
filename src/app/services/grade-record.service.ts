import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { Http, Headers, RequestOptions, Response } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class GradeRecordService {

  constructor(private http: Http) { }

  getClassCourses(){
  	return this.http.get('/api/courses',this.jwt()).map((response: Response) => response.json());
			
  }
  
  getGradeData() {
        return this.http.get('/api/grades', this.jwt()).map((response: Response) => response.json());
    }

  getStudentGrades() {
        return this.http.get('/api/studentGrades', this.jwt()).map((response: Response) => response.json());
    }

 getStudentGradesByName(name:string) {
        return this.http.get('/api/studentGrades/'+name, this.jwt()).map((response: Response) => response.json());
    }
   private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
