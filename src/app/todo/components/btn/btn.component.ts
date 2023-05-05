import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent {

  @Input()
  style: any

  @Input()
  value: string = ""

  @Output() 
  event: EventEmitter<any> = new EventEmitter<any>()

  action = (arg?: any): void => {
    if(arg){
      this.event.emit(arg);
    } else {
      this.event.emit();
    }
  }
}
