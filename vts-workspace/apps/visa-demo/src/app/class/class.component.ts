import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '@vts-workspace/api-interfaces';
import { AppService } from '../app.service';

@Component({
  selector: 'vts-workspace-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {
  @Input() public nameOfClass: string;
  @Output() public sayHi: EventEmitter<string> = new EventEmitter();

  public dataOnSecondComp$: Observable<any[]>;

  constructor(private service: AppService) {}

  ngOnInit() {
    this.dataOnSecondComp$ = this.service.getClassesFromApi();
  }

  sendToHostComponent() {
    this.sayHi.emit('Hello hello');
  }
}
