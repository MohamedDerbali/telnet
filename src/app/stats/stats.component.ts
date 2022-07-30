import { Component, OnInit } from '@angular/core';
import * as chartJs from 'chart.js';
import 'chart.js/auto';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  ctx1: any;
  ctx2: any;
  ctx4: any;
  ctx3: any;
  ctx5: any;
  canvas: any;
  constructor() {
  }

  ngOnInit(): void {
    this.ctx1 = document.getElementById('chart1');
    this.ctx3 = document.getElementById('chart3');
    this.ctx2 = document.getElementById('chart2');
    this.ctx4 = document.getElementById('chart4');
    this.ctx5 = document.getElementById('chart5');
    this.initialiseStatsLine();
    this.initialiseStatsDognuts();
    this.initialiseStatsBar();
    this.initialiseStatsDognutsLast();
    this.initialiseStatsRadar();

  }

  initialiseStatsLine(){
    new chartJs.Chart(this.ctx3, {
      type: 'line',
      data: {
        labels: ["element", "element", "element", "element", "element", "element", "element", "element"],
        datasets: [
          {
            label: '# of Votes',
            data: [0, 15, 10, 0, 50, 30, 20, 10],
            backgroundColor: [
              'white'
            ],
            borderColor: [
              'white'
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
            labels: {
              color: 'rgb(255, 99, 132)'
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
  
initialiseStatsDognuts(){
  new chartJs.Chart(this.ctx1, {
    type: 'doughnut',
    data: {
      labels: ["1st term", "2nd term", "3rd term", "4rth term", "5th term"],
      datasets: [
        {
          label: '# of Votes',
          data: [0, 15, 10, 0, 50],
          backgroundColor: [
            'white'
          ],
          borderColor: [
            'white'
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          labels: {
            color: 'white'
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
initialiseStatsBar(){
  new chartJs.Chart(this.ctx4, {
    type: 'bar',
    data: {
      labels: ["1st term", "2nd term", "3rd term", "4rth term", "5th term", "6th term", "7th term", "8th term"],
      datasets: [
        {
          label: '# of Votes',
          data: [0, 15, 10, 0, 50, 30, 20, 10],
          backgroundColor: [
            'white'
          ],
          borderColor: [
            'white'
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
          labels: {
            color: 'rgb(255, 99, 132)'
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
initialiseStatsDognutsLast(){
  new chartJs.Chart(this.ctx5, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Scatter Dataset',
            data: [{
                x: -10,
                y: 0
            }, {
                x: 0,
                y: 10
            }, {
                x: 10,
                y: 5
            }],
            backgroundColor: [
              'white'
            ],
            borderColor: [
              'white'
            ],
        }]
    },
   
    options: {
      plugins: {
        legend: {
          display: false,
          labels: {
            color: 'white'
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
initialiseStatsRadar(){
  new chartJs.Chart(this.ctx2, {
    type: 'radar',
    data: {
        datasets: [{
            data: [20, 10, 4, 2],
            backgroundColor: [
              'white'
            ],
            borderColor: [
              'white'
            ],
        }]
    },
   
    options: {
      plugins: {
        legend: {
          display: false,
          labels: {
            color: 'white'
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
}
