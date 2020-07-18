import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { StoreModule } from '@ngrx/store';
import { PostReducer } from '../store/reducers/post.reducers';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from '../store/effects/post.effects';
import { PostService } from '../services/post.service';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    StoreModule.forFeature('post', PostReducer),
    EffectsModule.forFeature([PostEffects])
  ],
  providers: [PostService]
})
export class FeedModule { }
