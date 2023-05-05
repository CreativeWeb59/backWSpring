import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/pages/todo.component';
import { DisplayComponent } from './todo/components/display/display.component';
import { AddTodoComponent } from './todo/components/add-todo/add-todo.component';
import { BtnComponent } from './todo/components/btn/btn.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    DisplayComponent,
    AddTodoComponent,
    BtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
