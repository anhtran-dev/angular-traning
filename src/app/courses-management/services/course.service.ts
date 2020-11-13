import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Course} from '../models/course.class';
import {HttpClient} from '@angular/common/http';
import {log} from 'util';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CourseService {
    public URL = 'http://localhost:4000/courses/';

    constructor(
            public httpClient: HttpClient
    ) {
    }

    getListCourses = (): Observable<Course[]> => {
        return this.httpClient.get<Course[]>(this.URL);
    };

    handleError = (err) => {
        if (err.error instanceof Error) {
            console.log(err.error.message);
        } else {
            console.log(err.error);
        }
    };

    addCourse = (course: Course): Observable<Course> => {
        return this.httpClient.post<Course>(this.URL, course);
    };

    detailCourse = (id): Observable<Course> => {
        return this.httpClient.get<Course>(this.URL + id);
    };

    updateCourse = (course: Course): Observable<Course> => {
        return this.httpClient.put<Course>(this.URL + course.id, course);
    };

    deleteCourse = (course: Course): Observable<Course> => {
        return this.httpClient.delete<Course>(this.URL + course.id);
    };

    searchCourse = (typeString: string): Observable<Course[]> => {
        if (!typeString.trim()) {
            return of([]);
        }
        return this.httpClient.get<Course[]>(`${this.URL}?name_like=${typeString}`).pipe(
                tap(data => console.log(data)),
                catchError(error => of(null))
        );
    };
}
