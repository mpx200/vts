import { Component, OnInit } from '@angular/core';
import { Message } from '@vts-workspace/api-interfaces';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'vts-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'VTS';

  public someData$: Observable<Message>;

  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.someData$ = this.service.getSomeDataFromApi();
  }
}
