import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-newsside',
  templateUrl: './newsside.component.html',
  styleUrls: ['./newsside.component.scss']
})
export class NewssideComponent implements OnInit {
  news: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    const newsId = this.route.snapshot.paramMap.get('id');
    this.http
    .get(`https://api.mediehuset.net/overlook/news/${newsId}`)
    .subscribe(data => {
      this.news = data;
      console.log(this.news)
    });
  }

}
