import { Component } from '@angular/core';
import { MessagesService } from './messages.service';
import { messages } from './models/messages';

//Resource: https://angular.io/tutorial/toh-pt4
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'mydist';
  author = 'James Corcoran';
  mArray: messages;

  constructor(private mServ: MessagesService) {

    this.mArray = this.mServ.getMessages();
  }

}
