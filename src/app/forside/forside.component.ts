import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from  '@angular/router';
declare const showSlides: any;
declare const currentSlide: any;
declare const plusSlides: any;

@Component({
  selector: 'app-forside',
  templateUrl: './forside.component.html',
  styleUrls: ['./forside.component.scss']
})
export class ForsideComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }
  news: any;
  rooms: any;
  country1: any;
  country2: any;
  country3: any;
  country4: any;
  country5: any;
  country6: any;
  country7: any;
  city1: any;
  city2: any;
  city3: any;
  city4: any;
  city5: any;
  city6: any;
  city7: any;

  ngOnInit(): void {
    this.http
    .get(`https://api.mediehuset.net/overlook/news`)
    .subscribe(data => {
      this.news = data;
      console.log(this.news)
    });
    this.http
    .get(`https://api.mediehuset.net/overlook/rooms/by_hotel/1`)
    .subscribe(data => {
      this.rooms = data;
      console.log(this.rooms)
    });
    this.http
    .get(`https://api.mediehuset.net/overlook/cities/by_country/1`)
    .subscribe(data => {
      this.country1 = data;
      console.log(this.country1)
    });
    this.http
    .get(`https://api.mediehuset.net/overlook/cities/by_country/2`)
    .subscribe(data => {
      this.country2 = data;
      console.log(this.country2)
    });
    this.http
    .get(`https://api.mediehuset.net/overlook/cities/by_country/3`)
    .subscribe(data => {
      this.country3 = data;
      console.log(this.country3)
    });
    this.http
    .get(`https://api.mediehuset.net/overlook/cities/by_country/4`)
    .subscribe(data => {
      this.country4 = data;
      console.log(this.country4)
    });
    this.http
    .get(`https://api.mediehuset.net/overlook/cities/by_country/5`)
    .subscribe(data => {
      this.country5 = data;
      console.log(this.country5)
    });
    this.http
    .get(`https://api.mediehuset.net/overlook/cities/by_country/6`)
    .subscribe(data => {
      this.country6 = data;
      console.log(this.country6)
    });
    this.http
    .get(`https://api.mediehuset.net/overlook/cities/by_country/7`)
    .subscribe(data => {
      this.country7 = data;
      console.log(this.country7)
    });
  }
  ngAfterViewInit(): void {
    showSlides();

  }
  goToNewsPage(NewsId){
    this.router.navigate(['/newsside', NewsId]);
  }
  goToRoomPage(VaerelseId){
    this.router.navigate(['/vaerelse', VaerelseId]);
  }
  goToSearchPage(cityId, num){
    console.log(num)
    this.router.navigate(['search/', cityId, num]);
  }

}
