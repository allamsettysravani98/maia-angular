import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PagecontentService {
  constructor(private http: HttpClient) {}

  apiUrl = 'https://maia.insoft.in/maia-api/module';

  content(content: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, content);
  }
}
