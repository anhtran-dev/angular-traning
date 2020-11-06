import {Component, OnDestroy, OnInit} from '@angular/core';
import {CourseService} from '../../services/course.service';
import {Course} from '../../models/course.class';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-course-add',
    templateUrl: './course-add.component.html',
    styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit, OnDestroy {
    public name: string;
    public description: string;
    public fee: number;

    public subscription: Subscription;

    constructor(
            public courseService: CourseService,
            public routerService: Router
    ) {
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    addCourse = () => {
        const course = new Course(this.name, this.description, this.fee);
        this.subscription = this.courseService.addCourse(course).subscribe(data => {
            return this.routerService.navigate(['/courses']);
        }, error => {
            this.courseService.handleError(error);
        });
    };

}
