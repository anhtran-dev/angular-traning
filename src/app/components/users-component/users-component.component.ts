import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import io from "socket.io-client";
let socket;
socket = io('http://sports.local:3003');
@Component({
    selector: 'app-users-component',
    templateUrl: './users-component.component.html',
    styleUrls: ['./users-component.component.css']
})
export class UsersComponentComponent implements OnInit ,OnChanges{
    users = [
        {
            id: 7,
            email : 'michael.lawson@reqres.in',
            first_name : 'Michael',
            last_name: 'Lawson',
            avatar : 'https://reqres.in/img/faces/7-image.jpg'
        },
        {
            id : 8,
            email : 'lindsay.ferguson@reqres.in',
            first_name : 'Lindsay',
            last_name: 'Ferguson',
            avatar : 'https://reqres.in/img/faces/8-image.jpg'
        },
        {
            id : 9,
            email : 'tobias.funke@reqres.in',
            first_name : 'Tobias',
            last_name: 'Funke',
            avatar : 'https://reqres.in/img/faces/9-image.jpg'
        },
        {
            id : 10,
            email : 'byron.fields@reqres.in',
            first_name : 'Byron',
            last_name: 'Fields',
            avatar : 'https://reqres.in/img/faces/10-image.jpg'
        },
        {
            id : 11,
            email : 'george.edwards@reqres.in',
            first_name : 'George',
            last_name: 'Edwards',
            avatar : 'https://reqres.in/img/faces/11-image.jpg'
        },
        {
            id : 12,
            email : 'rachel.howell@reqres.in',
            first_name : 'Rachel',
            last_name: 'Howell',
            avatar : 'https://reqres.in/img/faces/12-image.jpg'
        }
    ];
    public message: string;

    constructor() {
    }

    ngOnInit(): void {
        socket.on('message', (data) => {
            console.log(data);
        }) ;
    }
    ngOnChanges(simpleChanges: SimpleChanges): void {
    }

  JoinGroup = (id , name , room) => {
      socket.emit('joinGroup' , {id , name , room});
  }
    SendChat = (name , room , message) => {
        socket.emit('sendMessage' , { name , room, message});
    }


}
