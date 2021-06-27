import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { reducers } from './store/reducers';
import { effects } from './store/effetcs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
