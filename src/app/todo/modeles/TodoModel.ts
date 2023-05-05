interface ITodo {
  id: string
  task: string
  done: boolean
}

class TodoModel implements ITodo{
    // [x: string]: any;
    
    private _id!: string;
    private _task: string;
    private _done: boolean = false;

    constructor(task: string) {
      this._task = task
    }
    get id(): string {
      return this._id;
    }
    get task(): string {
      return this._task;
    }
    get done(): boolean {
      return this._done;
    }
    set done(done:boolean){
      this._done = done;
    }
}

export {ITodo, TodoModel}