import { Component, Input, OnInit, ViewChild } from "@angular/core";
import Typewriter from 't-writer.js';
import { AngularAnimation } from "../animation/animation";

@Component({
  selector: "add-task",
  templateUrl: "./add-task.component.html",
  animations: [AngularAnimation]
})
export class AddTaskComponent {
  @Input() textValue: string;
  @Input() className: string;
  @ViewChild("tw") typewriterElement;

  show = true;
  hideLabel = false;

  ngOnInit() {
    //setTimeout(() => (this.hideLabel = true), 1000);

    const target = this.typewriterElement.nativeElement;
    const writer = new Typewriter(target, {
      loop: false,
      typeColor: "#5d5581"
    });

    writer
      .type('Make Animation')
      .rest(500)
      .start();
  }

  onKeypress()
  {
    debugger;
    console.log(this.textValue);
  }
}
