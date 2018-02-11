import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent implements OnInit {
  @Input()
  data;

  compatibility;
  constructor() { }

  computeCompatibility() {
    const length = Object.keys(this.data).length;
    let sum = 0;
    let total = 0;
    for (const key in this.data) {
      if (this.data.hasOwnProperty(key)) {
        if (this.data[key][2] !== 0) {
          sum = sum + (Math.abs(this.data[key][0] - this.data[key][1]) * this.data[key][2]);
          total = total + (this.data[key][2]);
        }
      }
    }
    return Math.ceil(100 - (sum / total)) + '%';
  }

  ngOnInit() {
    this.compatibility = this.computeCompatibility();
  }

}
