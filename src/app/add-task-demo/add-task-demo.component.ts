import { Component } from '@angular/core';

@Component({
  selector: 'add-task-demo',
  templateUrl: './add-task-demo.component.html',
})
export class AddTaskDemoComponent  {
  inputText:string = "";
  constructor() {
  }
}
