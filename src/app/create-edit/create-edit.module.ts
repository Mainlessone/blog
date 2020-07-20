import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CreateComponent, EditComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CreateEditModule { }
