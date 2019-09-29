import { Injectable, Input } from '@angular/core';

//SERVICE
//When you provide the service at the root level, Angular creates a single,
//shared instance of the service and injects into any class that asks for it.
//Ref: https://angular.io/tutorial/toh-pt4

@Injectable({
  providedIn: 'root'
})

export class MyServiceService {
  @Input() bLike: boolean;


  constructor() { }

  //feels funky fix it, and refer to Q1 in hw2
  likeImage(notice: boolean): boolean {
    console.log("Image liked");
    notice = true
    return notice;
  }
}
