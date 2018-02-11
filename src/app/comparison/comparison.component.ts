import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent implements OnInit {

  data = {
    'classical' : [5, 40, 1],
    'hiphop' : [10, 35, 1],
    'pop' : [15, 30, 1],
    'country' : [20, 25, 1],
    'edm' : [25, 20, 1],
    'rock' : [30, 15, 1],
    'indie' : [35, 10, 1],
    'bluesjazz' : [40, 5, 1],
    'musicpopularity' : [76, 35, 5],
    'danciness' : [10, 50, 2],
    'instrumentalness' : [20, 40, 2],
    'highenergy' : [30, 30, 2],
    'happiness' : [40, 20, 2],
    'fast' : [50, 10, 2]
  };
  compatibility = this.computeCompatibility();
  constructor() { }

  computeCompatibility() {
    const length = Object.keys(this.data).length;
    let sum = 0;
    let total = 0;
    for (const key in this.data) {
      if (this.data.hasOwnProperty(key)) {
        sum = sum + (Math.abs(this.data[key][0] - this.data[key][1]) * this.data[key][2]);
        total = total + (this.data[key][2]);
      }
    }
    return Math.ceil(100 - (sum / total)) + '%';
  }

  ngOnInit() {
  }

}
