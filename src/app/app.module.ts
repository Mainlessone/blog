import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './services/post.service';
import { PostEffects } from './store/effects/post.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { PostReducer } from './store/reducers/post.reducers';
import { FeedModule } from './feed/feed.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FeedModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([PostEffects]),
    StoreModule.forRoot({ post: PostReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
