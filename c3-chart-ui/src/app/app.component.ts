import {Component, OnInit} from '@angular/core';
import c3 from 'c3';
import {DataService} from './data.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'app';
  lineChartData: any;

  constructor(private dataService: DataService) {
    console.log('constructor called')
    this.lineChartData = dataService.getLineChartData();
    console.log(this.lineChartData);


  }

  ngOnInit(): void {
    console.log('onInitCalled....')
    console.log( this.lineChartData);
    const chart = c3.generate({
      bindto: '#lineChart',
      data: {}
    });
    chart.load(this.lineChartData);
  }
}
