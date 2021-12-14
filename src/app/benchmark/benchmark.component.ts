import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-benchmark',
  templateUrl: './benchmark.component.html',
  styles: [`
    :host {
        width: 100%;
    }
    input {
      width: 100%;
      max-width: 200px;
      margin-bottom: 20px;
    }
    /* div.square {
      width: 40px;
      height: 40px;
      background-color: blue;
    } */
    div.actions {

    }
    button {
      background-color: darkblue;
      color: white;
      margin-right: 20px;
    }
  `]
})
export class BenchmarkComponent implements OnInit {

  @Input() header = 'Default Header';

  @Output() buttonClickedEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked(event: MouseEvent) {
    this.buttonClickedEvent.emit('Angular button clicked');
  }

}
