import { Component, Input, OnInit, ViewChild } from "@angular/core";
import Typewriter from 't-writer.js';
import { AngularAnimation } from "../animation/animation";

@Component({
  selector: "add-task",
  templateUrl: "./add-task.component.html",
  animations: [AngularAnimation]
})
export class AddTaskComponent {
  @Input() isChecked: boolean;
  @Input() className: string;
  @ViewChild("tw") typewriterElement;
  @ViewChild("tw2") typewriterElement2;
  @ViewChild("tw3") typewriterElement3;

  show = true;
  hideLabel = false;

  ngOnInit() {
    setTimeout(() => (this.hideLabel = true), 1000);

    const target = this.typewriterElement.nativeElement;
    const writer = new Typewriter(target, {
      loop: false,
      typeColor: "#5d5581"
    });

    writer
      .type(`Make animation`)
      .rest(500)
      .start();
  }
}
