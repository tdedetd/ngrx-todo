import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextboxComponent } from './components/textbox/textbox.component';

@NgModule({
  declarations: [
    TextboxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TextboxComponent
  ]
})
export class SharedModule { }
