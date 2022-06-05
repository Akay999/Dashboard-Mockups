import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit, AfterViewInit {
  @ViewChild('VisitChart') vchart : ElementRef;

  constructor() { }

  public dateObj = "5th May 2021 18:30 pm";
  public empObj = {
    name : "Akshat Sharma",
    Role : "Project Manager"
  }

  public OutObj = {
    Count  : 20,
    CurMonth : "May"
  }

  public VisitObj = {
    Count : 15,
    CurMonth : "May"
  }

  public AmtObj = {
    Count : 40000,
    CurMonth : "May"
  }

  data = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "1990",
          "value": 62000000
        },
        {
          "name": "2010",
          "value": 73000000
        },
        {
          "name": "2011",
          "value": 89400000
        }
      ]
    },
  
    {
      "name": "USA",
      "series": [
        {
          "name": "1990",
          "value": 250000000
        },
        {
          "name": "2010",
          "value": 309000000
        },
        {
          "name": "2011",
          "value": 311000000
        }
      ]
    },
  
    {
      "name": "France",
      "series": [
        {
          "name": "1990",
          "value": 58000000
        },
        {
          "name": "2010",
          "value": 50000020
        },
        {
          "name": "2011",
          "value": 58000000
        }
      ]
    },
    {
      "name": "UK",
      "series": [
        {
          "name": "1990",
          "value": 57000000
        },
        {
          "name": "2010",
          "value": 62000000
        }
      ]
    }
  ]

  multi: any[];
  view: any[] = [700, 300];

  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  dimen = [500,300]

  show() {
    console.log(this.vchart.nativeElement.offsetWidth);
 }

  ngOnInit(): void {
  }

  ngAfterViewInit() : void {
    this.dimen[1] = this.vchart.nativeElement.offsetHeight + 70;
    this.dimen[0] = this.vchart.nativeElement.offsetWidth;
    console.log(this.dimen);
  }

}
