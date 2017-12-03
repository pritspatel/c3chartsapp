import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {

  lineChartData: any;
  constructor(private http: HttpClient) {
  }


  getLineChartData() {
    return this.http.get('http://localhost:8080/api/data/lineChart').subscribe(data => {
      console.log('data from server:' + data);
      return data;
    });
  }
}
