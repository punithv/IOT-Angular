import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  constructor(){}

  pieChartOptions = {
    responsive: true
}


public chartType: string = 'pie';

public chartDatasets: Array<any> = [
  { data:[7, 8, 10], label: 'My First dataset' }

];

public chartLabels: Array<any> = ['Active', 'InActive', 'Deleted'];

public chartColors: Array<any> = [
  {
    backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C'],
    hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870'],
    borderWidth: 3,
  }
];


  ngOnInit(): void {
  }

}
