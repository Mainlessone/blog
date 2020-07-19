import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { CreateComponent } from './create-edit/create/create.component';
import { EditComponent } from './create-edit/edit/edit.component';


const routes: Routes = [
  { path: '', redirectTo: '/feed', pathMatch: 'full' },
  { path: 'feed', component: FeedComponent },
  { path: 'signUp', component: SignupComponent },
  { path: 'signIn', component: SigninComponent },
  { path: 'create', component: CreateComponent },
  { path: 'edit', component: EditComponent },
  { path: '**', redirectTo: '/feed', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
