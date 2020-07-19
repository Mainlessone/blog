import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthReducer } from '../store/reducers/auth.reducers';
import { AuthEffects } from '../store/effects/auth.effects';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [SignupComponent, SigninComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forFeature('auth', AuthReducer),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule { }
