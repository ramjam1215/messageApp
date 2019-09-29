import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-image',
  templateUrl: './my-image.component.html',
  styleUrls: ['./my-image.component.css']
})
export class MyImageComponent implements OnInit {
  image: string;

  constructor() {
    this.image = 'https://images.app.goo.gl/4bCeemd32fvrhYEj6';
  }

  ngOnInit() {
  }

}
