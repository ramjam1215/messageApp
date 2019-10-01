import { Injectable } from '@angular/core';
import { message } from './models/message';
import { messages } from './models/messages';
import { user } from './models/user';



@Injectable({
  providedIn: 'root'
})

export class MessagesService {
  myMessages: messages;

  constructor() {
    this.initService();
    console.log("initialized message service");
  }

  initService() {
    //fill with test data
    this.myMessages = new messages();
    this.myMessages.addMessage(new message("1st message"));
    this.myMessages.addMessage(new message("2nd message"));
    this.myMessages.addMessage(new message("3rd message"));
    this.myMessages.addMessage(new message("4th message"));
    this.myMessages.addMessage(new message("5th message"));
  }

  getMessages(): messages {

    return this.myMessages;
  }
}
