import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [PostComponent],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class PostModule { }
