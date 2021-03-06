import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Message } from '@vts-workspace/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) {}

  public getSomeDataFromApi(): Observable<Message> {
    return this.http.get<Message>('/api/hello');
  }

  public getSomeDatasFromApi(): Observable<Message[]> {
    return this.http.get<Message[]>('/api/hellos');
  }

  public getClassesFromApi(): Observable<any[]> {
    return this.http.get<any[]>('/api/classes');
  }
}
