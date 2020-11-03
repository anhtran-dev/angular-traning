import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {Todo} from '../../models/todo.class';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy, OnChanges {
    public todos: Todo[] = [];

    public title: string;
    public completed: boolean;
    public subscription: Subscription;

    constructor(
            public todoService: TodoService
    ) {
    }

    ngOnInit(): void {
        this.loadData();
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
    }

    loadData = () => {
        this.subscription = this.todoService.getListTodo().subscribe(data => {
            this.todos = data;
        }, error => {
            this.todoService.handleError(error);
        });
    };

    addTodo = () => {
        const todo = new Todo(this.title, this.completed);
        this.subscription = this.todoService.addTodo(todo).subscribe(data => {
            this.todos.push(data);
        }, error => {
            this.todoService.handleError(error);
        });
    };


}
