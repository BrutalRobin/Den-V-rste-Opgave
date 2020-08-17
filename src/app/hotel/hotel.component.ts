import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {
  hotel: any;
  rooms: any;
  countries: any;
  country: any;
  hotels: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    const hotelId = this.route.snapshot.paramMap.get('hotelid');
    const countryId = this.route.snapshot.paramMap.get('countryid');
    this.http
    .get(`https://api.mediehuset.net/overlook/hotels/${hotelId}`)
    .subscribe(data => {
      this.hotel = data;
    });
    this.http
    .get(`https://api.mediehuset.net/overlook/rooms/by_hotel/${hotelId}`)
    .subscribe(data => {
      this.rooms = data;
    });
    this.http
    .get(`https://api.mediehuset.net/overlook/countries`)
    .subscribe(data => {
      this.countries = data;
    });
    this.http
    .get(`https://api.mediehuset.net/overlook/countries/${countryId}`)
    .subscribe(data => {
      this.country = data;
    });
    this.http
    .get(`https://api.mediehuset.net/overlook/cities/${countryId}`)
    .subscribe(data => {
      this.hotels = data;
    });
  }

}
