import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import io from 'socket.io-client';
import {Router} from '@angular/router';

let socket;
socket = io('http://sports.local:3003');

@Component({
    selector: 'app-users-component',
    templateUrl: './users-component.component.html',
    styleUrls: ['./users-component.component.css']
})
export class UsersComponentComponent implements OnInit, OnChanges {
    public comments: string;
    constructor(
            public routerService: Router
    ) {
    }

    users = [
        {
            id: 7,
            email: 'michael.lawson@reqres.in',
            first_name: 'Michael',
            last_name: 'Lawson',
            avatar: 'https://reqres.in/img/faces/7-image.jpg'
        },
        {
            id: 8,
            email: 'lindsay.ferguson@reqres.in',
            first_name: 'Lindsay',
            last_name: 'Ferguson',
            avatar: 'https://reqres.in/img/faces/8-image.jpg'
        },
        {
            id: 9,
            email: 'tobias.funke@reqres.in',
            first_name: 'Tobias',
            last_name: 'Funke',
            avatar: 'https://reqres.in/img/faces/9-image.jpg'
        },
        {
            id: 10,
            email: 'byron.fields@reqres.in',
            first_name: 'Byron',
            last_name: 'Fields',
            avatar: 'https://reqres.in/img/faces/10-image.jpg'
        },
        {
            id: 11,
            email: 'george.edwards@reqres.in',
            first_name: 'George',
            last_name: 'Edwards',
            avatar: 'https://reqres.in/img/faces/11-image.jpg'
        },
        {
            id: 12,
            email: 'rachel.howell@reqres.in',
            first_name: 'Rachel',
            last_name: 'Howell',
            avatar: 'https://reqres.in/img/faces/12-image.jpg'
        }
    ];
    public typing = false;
    // public comment: string;

    ngOnInit(): void {
        console.log('ng on init ');
        socket.on('message', (data) => {
            console.log(data);
        });
        socket.on('display', (data) => {
            console.log(data);
        });
        socket.on('comment', (data) => {
            console.log(data);
        });
    }

    ngOnChanges(simpleChanges: SimpleChanges): void {
        console.log('on change');
    }

    @Input('total') message: string;

    JoinGroup = (id, first_name, last_name, avatar, room) => {
        socket.emit('joinGroup', {id, first_name, last_name, avatar, room});
        // return this.routerService.navigate(['/chats/' + room]);
    };
    LeaveGroup = (name, room) => {
        socket.emit('leaveGroup', {name, room});
    };
    SendChat = (id, first_name, last_name, avatar, room, message) => {
        socket.emit('sendMessage', {id, first_name, last_name, avatar, room, message});
    };

    onChangeInput = (id, first_name, last_name,avatar,  room) => {
        if (this.message.length > 0) {
            this.typing = true;
        }
        else{
            this.typing = false;
        }
        socket.emit('typing', {id, first_name, last_name, avatar, room , typing : this.typing});
    };

    comment = (user_id , first_name , last_name , avatar , comment , post_id) => {
        console.log(10);
        socket.emit('addComments', {user_id, first_name, last_name, avatar, comment, post_id});
    }

}
