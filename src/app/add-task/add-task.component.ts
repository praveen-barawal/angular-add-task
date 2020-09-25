import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { AngularAnimation } from "../animation/animation";

@Component({
  selector: "add-task",
  templateUrl: "./add-task.component.html",
  animations: [AngularAnimation]
})
export class AddTaskComponent {
  @Input() textValue: string;
  @Input() className: string;
  show:boolean = true;
  hideLabel:boolean = false;
  currentState:string="inChkboxState";
  isChecked:boolean = false;

  ngOnInit() {
    // setTimeout(() => (this.currentState = "inInputState"), 2000);
  }

  onKeypress()
  {
    this.currentState ="inChkboxState";
    console.log(this.textValue);
  }

  onCheckBoxChange()
  {
    if(this.isChecked){
       this.currentState ="closed";
    }
  }
}
