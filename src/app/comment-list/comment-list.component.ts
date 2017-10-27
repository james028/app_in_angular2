import { Component, OnInit, Input } from '@angular/core';

import { NewComment } from '../comment.data';


@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  //@Input() com;
  
  constructor() { }

  ngOnInit() {
  }

}
