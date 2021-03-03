import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';
let socket;
socket = io('http://sports.local:3003');

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

  message = '';
  constructor() { }

  ngOnInit(): void {
    console.log('ng on init ');
    socket.on('message', (data) => {
      console.log(data);
    });
  }
  LeaveGroup = (name, room) => {
    socket.emit('leaveGroup', {name, room});
  };
  SendChat = (name, avatar, room, message) => {
    socket.emit('sendMessage', {name, avatar, room, message});
  };


}
