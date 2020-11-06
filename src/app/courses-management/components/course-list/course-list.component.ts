import {Component, OnDestroy, OnInit} from '@angular/core';
import {Course} from '../../models/course.class';
import {Subscription} from 'rxjs';
import {CourseService} from '../../services/course.service';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnDestroy {
    public courses: Course[] = [];
    public subcription: Subscription;

    constructor(
            public courseService: CourseService
    ) {
    }

    ngOnInit(): void {
        this.getListCourses();

    }

    ngOnDestroy(): void {
        if (this.subcription) {
            this.subcription.unsubscribe();
        }
    }

    getListCourses = () => {
        this.subcription = this.courseService.getListCourses().subscribe(data => {
            this.courses = data;
        });
    };

    onDelete = (course: Course) => {
        this.subcription = this.courseService.deleteCourse(course).subscribe(data => {
            this.courses.forEach((item, index) => {
                if (item.id === course.id) {
                    this.courses.splice(index, 1);
                }
            });
        }, error => {
            this.courseService.handleError(error);
        });
    };


}
