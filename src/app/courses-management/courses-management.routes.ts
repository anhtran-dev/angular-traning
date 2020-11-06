import {Routes} from '@angular/router';
import {CourseComponent} from './components/course/course.component';
import {CourseAddComponent} from './components/course-add/course-add.component';
import {CourseEditComponent} from './components/course-edit/course-edit.component';
import {CourseListComponent} from './components/course-list/course-list.component';

export const coursesRoutes: Routes = [
    {
        path: 'courses',
        component: CourseComponent,
        children: [
            {
                path: '',
                component : CourseListComponent,
            },
            {
                path: 'update/:id',
                component : CourseEditComponent,
            },
            {
                path: 'add',
                component : CourseAddComponent,
            }
        ]
    },
];
