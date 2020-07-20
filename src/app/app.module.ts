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
import { AuthService } from './services/auth.service';
import { AuthModule } from './auth/auth.module';
import { AuthEffects } from './store/effects/auth.effects';
import { AuthReducer } from './store/reducers/auth.reducers';
import { SignUpEffects } from './store/effects/signup.effects';
import { SignUpReducer } from './store/reducers/signup.reducers';
import { CreateEditModule } from './create-edit/create-edit.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    FeedModule,
    AppRoutingModule,
    HttpClientModule,
    CreateEditModule,
    EffectsModule.forRoot([PostEffects, AuthEffects, SignUpEffects]),
    StoreModule.forRoot({ post: PostReducer, auth: AuthReducer, signUp: SignUpReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [PostService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
