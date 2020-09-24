import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';
import Typewriter from 't-writer.js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [ 
    trigger('fadeOut', [
  state('void', style({
    opacity: 0
  })),
   transition(':leave',
        animate(600, style({opacity: 2})))
   ]),
    trigger('Leave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
      style({ transform: 'translateX(-100%)' }),
      animate('2s 100ms ease-in') 
    ]),
  ],
)]
})
export class AppComponent implements OnInit  {
  @ViewChild('tw') typewriterElement;
  @ViewChild('tw2') typewriterElement2;
  @ViewChild('tw3') typewriterElement3;

  show = true;
  hideLabel = false;

  ngOnInit() {
    setTimeout(() => 
    this.hideLabel =true
    , 1000);
    
    const target = this.typewriterElement.nativeElement
    const writer = new Typewriter(target, {
      loop: false,
      typeColor: '#5d5581'
    })

    writer
      .type(`Make animation`)
      .rest(500)
      .start()

  }
  }

