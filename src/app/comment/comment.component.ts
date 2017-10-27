import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, NgForm, Validators } from '@angular/forms';


import { NewComment } from '../comment.data';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comments: NewComment[] = [
            // new NewComment("james", "s", "32")
  ];
  nick;
  text;
  CommentForm: FormGroup;
  

  constructor() { 
      this.CommentForm = new FormGroup({
        nick: new FormControl(),
        text: new FormControl()
      });
  }

  ngOnInit() {
    this.comments;
  }

  onSubmit() {
      this.comments.unshift({
        nick: this.CommentForm.value.nick,
        text: this.CommentForm.value.text
      });
  }


  deleteComment(ind) {
    let index = this.comments.indexOf(ind);
    this.comments.splice(index, 1);
  }

  
}
