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

  trigger("strikeOpenClose", [
    state(
      "inputOpen",
      style({
       textDecoration: "none",
       
      })
    ),
    state(
      "inputClosed",
      style({
       textDecoration: "line-through",
      })
    ),
    transition("* => *", [animate(".2s")])
  ]),

  trigger("chkboxOpenClose", [
    state(
      "open",
      style({
        backgroundColor: "rgb(153 195 151 / 6%)",
      })
    ),
    state(
      "closed",
      style({
       backgroundColor: "white",
      })
    ),
    transition("* => *", [animate("3s")])
  ]),

  trigger("openClose", [
    state(
      "open",
      style({
        color: "#a5a1b4"
      })
    ),
    state("inInputState", style({})),
    state("inChkboxState", style({})),
    state("closed", style({})),
  ])
];
