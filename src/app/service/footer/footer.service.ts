import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'https://maia.insoft.in/maia-api/module';

  getlist(footer: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, footer);
  }

  getById(footer: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, footer);
  }

  postdata(footer: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, footer);
  }
}
