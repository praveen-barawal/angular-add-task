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
      "inProgress",
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
    transition("open => closed", [animate("1s")]),
    transition("closed => open", [animate("0.5s")]),
    transition("closed <=> inProgress", [animate("4s")]),
    transition("open <=> inProgress", [animate("4s")])
  ])
];
