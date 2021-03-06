import { Component } from '@angular/core';
import { Http } from '@angular/http';

// Helpers :
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myData: Array<any>;

    constructor(private http:Http) {
      this.http.get('http://api.icndb.com/jokes/random/20')
        .map(response => response.json())
        .subscribe(res => this.myData = res);
    }
}
