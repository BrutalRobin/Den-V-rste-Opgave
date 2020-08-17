import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-vaerelse',
  templateUrl: './vaerelse.component.html',
  styleUrls: ['./vaerelse.component.scss']
})
export class VaerelseComponent implements OnInit {
  room: any;
  hotel: any;
  cityname: any;
  country: any;
  countries: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    const cityId = this.route.snapshot.paramMap.get('id');
    const hotelId = this.route.snapshot.paramMap.get('hotelid');
    const countryId = this.route.snapshot.paramMap.get('countryid');
    const cityname = this.route.snapshot.paramMap.get('cityname');
    this.cityname = cityname;
    this.http
    .get(`https://api.mediehuset.net/overlook/rooms/${cityId}`)
    .subscribe(data => {
      this.room = data;
      console.log(this.room)
    });
    this.http
    .get(`https://api.mediehuset.net/overlook/hotels/${hotelId}`)
    .subscribe(data => {
      this.hotel = data;
    });
    this.http
    .get(`https://api.mediehuset.net/overlook/countries/${countryId}`)
    .subscribe(data => {
      this.country = data;
      console.log(this.country)
    });
    this.http
    .get(`https://api.mediehuset.net/overlook/countries`)
    .subscribe(data => {
      this.countries = data;
    });

  }

}
