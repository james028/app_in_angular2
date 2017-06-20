import { COMMENT } from './comment-data';
import { Injectable } from '@angular/core';

@Injectable()

export class CommentService {

    getComments() {
        return COMMENT;
    }
    
}
