import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class UserdetailsService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'https://maia.insoft.in/maia-api/module';

  userdata(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, user);
  }


  byid(id: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, id);
  }

}
