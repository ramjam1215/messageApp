import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';


@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})

export class MyButtonComponent implements OnInit {

  //boolean property
  bTrigger: boolean;

  constructor(private myService: MyServiceService) {
    this.bTrigger = false;
  }

  ngOnInit() {
  }

  //feels funky, fix it
  buttonPressed(): void {
    console.log(`button pressed.... Value currently: ${this.bTrigger}`);
    //this.bTrigger = this.myService.likeImage(this.bTrigger);
  }

}
