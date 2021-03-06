import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-benchmark',
  templateUrl: './benchmark.component.html',
  styles: [`
    :host {
        width: 300px;
    }
    .content {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
    }
    .note {
      /* background-color: lightgray; */
      background-color: #F0F0F0;
      /* width: 100%; */
      padding: 10px;
      border-radius: 7px 7px 0 0;
    }
    .form {
      display: flex;
      flex-direction: column;
      background-color: red;
      padding: 10px;
      border-radius: 0 0 7px 7px;
    }
    .form-text {
      color: white;
      /* background-color: red; */
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
      text-align: center;
    }
    button {
      background-color: red;
      color: white;
      margin-right: 20px;
      padding: 10px;
      border-radius: 5px;
    }
  `]
})
export class BenchmarkComponent implements OnInit {

  @Input() header = 'Default Header';

  @Output() buttonClickedEvent = new EventEmitter<string>();

  @ViewChild('zipInput') zipInput!: ElementRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked(event: MouseEvent) {
    const zip = this.zipInput.nativeElement.value;
    this.buttonClickedEvent.emit('We are searching for pharmacies near zipcode ' + zip + '. Please wait...');
  }

  clearZip() {
    this.zipInput.nativeElement.value = '';
  }

}
