import { Component, OnInit } from '@angular/core';
import { Comment } from './comment';
import { CommentService } from './comment-service';
import { COMMENT } from './comment-data';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  inputs: ['ii'],
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

 ii: Comment;
 

  Plus() : boolean {
    this.ii.votePlus();
    return false;
  }

  Minus() : boolean {
    this.ii.voteMinus();
    return false;
  }
 

    constructor(private _comSer: CommentService) { 
          
    }
    onDeleteComm( art: Comment) {
      this._comSer.deleteComm(art);
    }

  ngOnInit() {

  }

}
