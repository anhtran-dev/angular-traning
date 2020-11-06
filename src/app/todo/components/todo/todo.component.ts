import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
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
    public completed: string;
    public todo: Todo = null;
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
        let status;
        if (this.completed === 'true') {
            status = true;
        } else {
            status = false;
        }
        const todo = new Todo(this.title, status);
        this.subscription = this.todoService.addTodo(todo).subscribe(data => {
            this.todos.push(data);
        }, error => {
            this.todoService.handleError(error);
        });
    };
    showModalEdit = (item: Todo) => {
        this.todo = item;

    };
    onUpdate = (todo: Todo) => {
        this.subscription = this.todoService.updateTodo(todo).subscribe(data => {
            this.todos.forEach((item, index) => {
                if (item.id === data.id) {
                    this.todos[index] = data;
                }
            });
        }, error => {
            this.todoService.handleError(error);
        });
    };

    onDelete = (todo: Todo) => {
        this.subscription = this.todoService.deleteTodo(todo).subscribe(data => {
            this.todos.forEach((item, index) => {
                if (item.id === data.id) {
                    this.todos.splice(index, 1);
                }
            });
        }, error => {
            this.todoService.handleError(error);
        });
    };

}
