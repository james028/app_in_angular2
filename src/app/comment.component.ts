import { Component, OnInit } from '@angular/core';
import { Comment } from './comment';
import { CommentService } from './comment-service';
import { COMMENT } from './comment-data';
import { DataService } from './data.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  inputs: ['ii'],
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {


 ii: Comment;
 aa: Object[];

  Plus() : boolean {
    this.ii.votePlus();
    return false;
  }

  Minus() : boolean {
    this.ii.voteMinus();
    return false;
  }
 
 //remove(i) {
   //this.aa.splice(i,1);
 //}



    deleteItem(message:string) {
        this.dataService.deleteMsg(message);
    }
    
    constructor(private dataService: DataService) { 
          
    }



  ngOnInit() {

  }

}
