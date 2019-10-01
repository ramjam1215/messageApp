
export class message {

  //properties
  timestamp: number;
  text: string;

  constructor(inText: string) {
    
    this.timestamp = Date.now();
    this.text = inText;

    console.log(`Message: Timestamp( ${this.timestamp} ) , Text( ${this.text} )`);
  }

}
