import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {TodoService} from './services/todo.service';
import {TodoComponent} from './components/todo/todo.component';
import {RouterModule} from '@angular/router';
import {todoRoutes} from './todo.routes';
import {AppRoutingModule} from '../app-routing.module';


@NgModule({
    declarations: [
        TodoComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(todoRoutes)
    ],
    providers: [
        TodoService,
    ]
})
export class TodoModule {
}
