import { Component, OnInit } from '@angular/core';

//a decorator; meta data added to our code

@Component({
  //selector => defines a new tag to be used in html
  //templateURL/template => tells us where to get the template or we can use backticks `` to use multiline strings
  //styleUrls serve a similar purpose as the template Url, but with CSS stuff
  //the style will only apply to that component.
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
