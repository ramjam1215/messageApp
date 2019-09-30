import { Injectable, Input } from '@angular/core';
import { not } from '@angular/compiler/src/output/output_ast';

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

  //Practice code, will change for final submission
  likeImage(notice: boolean): boolean {
    console.log("Image liked");

    if (notice) {
      notice = false;
    }

    else {
      notice = true;
    }

    return notice;
  }

}
