import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'sandbox-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Welcom to client!';

  constructor(private dataService: DataService) {
    this.getData();
  }

  getData() {
    this.dataService.getData().subscribe((data) => {
      this.title = data.message;
    });
  }
}
