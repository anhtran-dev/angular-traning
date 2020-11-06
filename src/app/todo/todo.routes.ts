import {Routes} from '@angular/router';
import {TodoComponent} from './components/todo/todo.component';

export const todoRoutes: Routes = [
    {
        path: 'todos',
        component: TodoComponent,
    },
];
