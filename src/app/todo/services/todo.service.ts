import { Injectable } from '@angular/core';
import { ITodo } from '../modeles/TodoModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  private URI = "http://localhost:8080";
  constructor(private http: HttpClient) {
  }


  getAll = (): Observable<ITodo[]> => {
    return this.http.get<ITodo[]>(`${this.URI}`)
  }



  // private _todos: TodoModel[] = [
  //   new TodoModel("prendre son petit dej"),
  //   new TodoModel("prendre le métro"),
  //   new TodoModel("donner formation"),
  // ]
  // constructor() { }

  // get todos(): TodoModel[] {
  //   return this._todos;
  // }

  // addTodo(task: string) {
  //   this._todos.push(new TodoModel(task));
  // }

  // changeDone(id: string) {
  //   const todo: TodoModel | undefined = this._todos.find(item => item.id == id)
  //   if (todo) {
  //     todo.done = !todo.done
  //   }
  // }

  // delete = (id: string) => {
  //   this._todos.splice(this.todos.findIndex(item => item.id == id), 1)
  // }
}
