import { Component, Input, Output, EventEmitter } from '@angular/core';
import {TodoModel, ITodo} from '../../modeles/TodoModel';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  constructor() {
  }

  @Input()
  datas: ITodo[] = [new TodoModel('')]


  @Output()
  newDone: EventEmitter<string> = new EventEmitter()

  @Output()
  idDelete: EventEmitter<string> = new EventEmitter()

  changeChecked(id: string) {
    this.newDone.emit(id)
  }

  btnDelete: string = "Delete"
  btnStyle:{} = {
    "background-color": "red",
    "color": "white"
  };

  delete = (id: string):void => {
    this.idDelete.emit(id)
  }

}
