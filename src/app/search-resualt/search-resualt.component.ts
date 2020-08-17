import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-search-resualt',
  templateUrl: './search-resualt.component.html',
  styleUrls: ['./search-resualt.component.scss']
})
export class SearchResualtComponent implements OnInit {
  city: any;
  number: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    const cityId = this.route.snapshot.paramMap.get('id');
    const num = this.route.snapshot.paramMap.get('num');
    this.http
    .get(`https://api.mediehuset.net/overlook/hotels/by_city/${cityId}`)
    .subscribe(data => {
      this.city = data;
      console.log(this.city)
      this.number = num;
    });
  }

  }

