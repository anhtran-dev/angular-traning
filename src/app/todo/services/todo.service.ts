import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../models/todo.class';

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    public API = 'https://5fa0c8b1e21bab0016dfd4e3.mockapi.io/api/v1';

    constructor(
            public httpClient: HttpClient
    ) {
    }

    getListTodo = (): Observable<Todo[]> => {
        return this.httpClient.get<Todo[]>(this.API + '/todos');
    };

    handleError = (err) => {
        if (err.error instanceof Error) {
            console.log(err.error.message);
        } else {
            console.log(err.error);
        }
    };

    addTodo = (todo: Todo): Observable<Todo> => {
        return this.httpClient.post<Todo>(this.API + '/todos', todo);
    };

    updateTodo = (todo: Todo): Observable<Todo> => {
        return this.httpClient.put<Todo>(this.API + '/todos/' + todo.id, todo);
    };

    deleteTodo = (todo: Todo) => {
        return this.httpClient.delete<Todo>(this.API + '/todos/' + todo.id);
    };
}
