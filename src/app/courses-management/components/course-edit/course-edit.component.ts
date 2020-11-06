import {Component, OnDestroy, OnInit} from '@angular/core';
import {Course} from '../../models/course.class';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../../services/course.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-course-edit',
    templateUrl: './course-edit.component.html',
    styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit, OnDestroy {
    public course: Course = null;
    public subscription: Subscription;

    constructor(
            public courseService: CourseService,
            public activatedRoute: ActivatedRoute,
    ) {
    }

    ngOnInit(): void {
        this.getDetailCourse();
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    getDetailCourse = () => {
        const id = this.activatedRoute.snapshot.params.id;
        this.subscription = this.courseService.detailCourse(id).subscribe(data => {
            this.course = data;
        });
    };

    editCourse = (course: Course) => {
        this.subscription = this.courseService.updateCourse(course).subscribe(data => {
            console.log(data);
        }, error => {
            this.courseService.handleError(error);
        });
    };

}
