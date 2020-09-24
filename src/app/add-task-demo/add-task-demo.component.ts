import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-task-demo',
  templateUrl: './add-task-demo.component.html',
})
export class AddTaskDemoComponent  {
  @Input() isChecked: boolean;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();
}
