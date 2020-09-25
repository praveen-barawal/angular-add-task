import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

export const AngularAnimation = [
  trigger("fadeOut", [
    state(
      "void",
      style({
        opacity: 0
      })
    ),
    transition(":leave", animate(600, style({ opacity: 2 })))
  ]),
  trigger("Leave", [
    state("flyIn", style({ transform: "translateX(0)" })),
    transition(":enter", [
      style({ transform: "translateX(-100%)" }),
      animate("2s 100ms ease-in")
    ])
  ]),
  trigger("openClose", [
    state(
      "open",
      style({
        backgroundColor: "yellow"
      })
    ),
    state(
      "inInputState",
      style({
        backgroundColor: "orange"
      })
    ),
     state(
      "inChkboxState",
      style({
        backgroundColor: "orange"
      })
    ),
    state(
      "closed",
      style({
        backgroundColor: "green"
      })
    ),
    transition("open => inInputState", [animate("1s")]),
    transition("inInputState => inChkboxState", [animate("0.5s")]),
    transition("inInputState => closed", [animate("0.5s")]),
    transition("closed <=> inInputState", [animate("4s")]),
    transition("open <=> inInputState", [animate("4s")])
  ])
];
