import { AfterViewInit, Component, Input, OnInit, Renderer2, ViewChild, ElementRef } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { AngularAnimation } from "../animation/animation";

@Component({
  selector: "add-task",
  templateUrl: "./add-task.component.html",
  animations: [AngularAnimation]
})


export class AddTaskComponent implements OnInit {
  @Input() textValue: string;
  @Input() className: string;
  show:boolean = true;
  hideLabel:boolean = false;
  currentState:string="open";
  isChecked:boolean = false;
  form: FormGroup;

  ngOnInit() {
     this.form = new FormGroup({
      myInput: new FormControl('praveen')
    });
  }

  @ViewChild("name",{static:false}) nameField: ElementRef;

  onClickAddTask()
  {
    debugger;
    this.currentState ="inInputState";
     this.nameField.nativeElement.focus();
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
