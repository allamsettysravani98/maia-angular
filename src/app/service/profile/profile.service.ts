import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) {

  }
  private apiUrl = 'https://maia.insoft.in/maia-api/module';


  profile(profile: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, profile);

  }

  updateprofile(profile: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, profile);
  }
}
