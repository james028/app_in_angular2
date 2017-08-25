import { COMMENT } from './comment-data';
import { Injectable } from '@angular/core';

@Injectable()

export class CommentService {
    private art : [] = Comment[];

    getComments() {
        return COMMENT;
    }
    
    deleteComm(art: Comment) {
        this.art = this.art.slice(this.art.indexOf(art),1);
    }
}
