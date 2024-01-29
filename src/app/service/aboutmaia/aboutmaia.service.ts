import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AboutmaiaService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'https://maia.insoft.in/maia-api/module';

  getdata(maia: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, maia);
  }

  postdata(maia: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, maia);
  }

  getSession(session: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, session);
  }

  postsession(session: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, session);
  }

  //slider images
  getsliderimages(action: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, action);
  }

  updatesliderimages(form: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, form);
  }

  addsliderimages(form: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, form);
  }

  deletesliderimages(del: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, del);
  }
}
