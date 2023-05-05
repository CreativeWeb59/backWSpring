import { Component, EventEmitter, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import {ITodo, TodoModel} from '../modeles/TodoModel';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
  
  todos: ITodo[] = [];
  placeholder: string = "placeholder"

  constructor(private service:TodoService){

  }

  ngOnInit(): void {
      this.service.getAll().subscribe({
        next:(data: ITodo[]):void =>{
          this.todos = data
        },
        error:(err):void => {
            console.error(err)
        },
        complete:():void => {
            
        },
      })
  }

  getTodos = (): void => {
    // this.todos = this.service.todos
  }

  addTodo = (e: string) => {
    // console.log(e)
  // this.service.addTodo(e)
  }

  ChangeDone = (e: string) => {
  //  this.service.changeDone(e)
  }
  /**
   * supprime l'id
   * @param id id de la tache à supprimer
   */
  deleteTodo = (id: string) => {
    // this.service.delete(id)
  }

}
