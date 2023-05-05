import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

@Output()
newTask: EventEmitter<string> = new EventEmitter()

  add(e: HTMLInputElement){
    const data: string = e.value;
    if(data =='') return;
    this.newTask.emit(data)
    e.value = '';
  }
}
