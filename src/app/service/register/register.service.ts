import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'https://maia.insoft.in/maia-api/module';

  register(registermodel: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, registermodel);
  }
}
