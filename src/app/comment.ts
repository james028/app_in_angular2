export class Comment {

    nick: string;
    text: string; 
    votes: number;

 constructor (nick: string, text: string, votes?: number) {
    this.nick = nick;
    this.text = text;
    this.votes = votes || 0;
  }


    votePlus() : void {
      this.votes += 1;
    }

    voteMinus() : void {
      this.votes -= 1;
    }

    

}
