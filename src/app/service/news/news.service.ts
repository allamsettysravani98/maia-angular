import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  topHeadlinenews =
    'https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json';
  tcHeadline(): Observable<any> {
    return this.http.get(this.topHeadlinenews);
  }
}
