import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Headers, RequestOptions} from "@angular/http";

@Injectable()
export class DataService {

  lineChartData = {};
  constructor(private http: HttpClient) {
  }


  getLineChartData(): any {
    const res = this.http.get('http://localhost:8080/api/data/lineChart', {responseType: 'json'}).subscribe(data => {
      console.log(data);
       this.lineChartData = data;
       console.log(this.lineChartData);
    });
    return res;

  }


}
