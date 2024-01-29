import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/service/news/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  topHeadlinesData: any = [];

  constructor(private news: NewsService) {}
  ngOnInit(): void {
    this.news.tcHeadline().subscribe((result) => {
      this.topHeadlinesData = result.articles;
      console.log(this.topHeadlinesData);
    });
  }
}
