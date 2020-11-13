import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CourseComponent} from './components/course/course.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {coursesRoutes} from './courses-management.routes';
import {CourseAddComponent} from './components/course-add/course-add.component';
import {CourseEditComponent} from './components/course-edit/course-edit.component';
import {CourseListComponent} from './components/course-list/course-list.component';
import {CourseService} from './services/course.service';
import { CourseSearchComponent } from './components/course-search/course-search.component';


@NgModule({
    declarations: [
        CourseComponent,
        CourseAddComponent,
        CourseEditComponent,
        CourseListComponent,
        CourseSearchComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(coursesRoutes)
    ],
    providers: [
            CourseService
    ]
})
export class CoursesManagementModule {
}
