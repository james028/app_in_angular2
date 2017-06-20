import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import { OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Comment } from './comment';
import { CommentComponent } from './comment.component';
import { CommentService } from './comment-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
    uu: Comment [];

    getCommentse() {
      this.uu = this._CommentService.getComments();
    }

    ngOnInit() {
        this.getCommentse();
    }


  
  Comm: FormGroup;

  nick: FormControl = new FormControl('', Validators.required);
  text: FormControl = new FormControl('', Validators.required);


  constructor(private _CommentService: CommentService, fb: FormBuilder) {
            this.Comm = fb.group({
              'nick': this.nick,
              'text': this.text
            });
  }

  onSubmit() {
    this.uu.push(new Comment(this.nick.value, this.text.value));

    this.nick.patchValue(null);
    this.text.patchValue(null);
  }

  

}
