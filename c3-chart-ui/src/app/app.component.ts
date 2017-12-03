import {AfterViewInit, Component, OnInit} from '@angular/core';
import c3 from 'c3';
import {DataService} from './data.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  AfterViewInit{


  title = 'app';
  lineChartData={};

  constructor(private dataService: DataService) {
    console.log('constructor called');
    this.lineChartData = dataService.getLineChartData();
    console.log('constructor call completed')
    console.log(this.lineChartData);


  }
  ngAfterViewInit(): void {
    const chart = c3.generate({
      bindto: '#lineChart',
      data: {
        json : this.lineChartData
      }
    });

  }


}
