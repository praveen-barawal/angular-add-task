import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
  ElementRef, ChangeDetectorRef
} from "@angular/core";
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
  show: boolean = true;
  hideLabel: boolean = false;
  currentState: string = "open";
  isChecked: boolean = false;
  //form: FormGroup;
  inputTag:string;

  constructor(private changeDetector : ChangeDetectorRef) {}

  ngOnInit() {
    //  this.form = new FormGroup({
    //   myInput: new FormControl('')
    // });
  }

  @ViewChild("myText",{static:false}) nameField: ElementRef;
  onClickAddTask() {
    this.currentState = "inInputState";
    this.changeDetector.detectChanges();
    this.nameField.nativeElement.focus();
  }

  onKeypress($event) {
    debugger;
    this.currentState = "inChkboxState";
    this.inputTag = $event.currentTarget.value;
    console.log($event.currentTarget.value)
    
  }

  onCheckBoxChange() {
    if (this.isChecked) {
      this.currentState = "closed";
    }
  }
}
