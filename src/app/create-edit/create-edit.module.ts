import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEditComponent } from './create-edit.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [CreateEditComponent, CreateComponent, EditComponent],
  imports: [
    CommonModule
  ]
})
export class CreateEditModule { }
