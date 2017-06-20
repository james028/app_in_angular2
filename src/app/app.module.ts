import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommentComponent } from './comment.component';
import { CommentService } from './comment-service';
import { DataService } from './data.service';




@NgModule({
  declarations: [
    AppComponent,
    CommentComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    CommentService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
