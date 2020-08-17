import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-byer',
  templateUrl: './byer.component.html',
  styleUrls: ['./byer.component.scss']
})
export class ByerComponent implements OnInit {
  hotels: any;
  countries: any;
  country: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) { }

    ngOnInit(): void {
      const cityId = this.route.snapshot.paramMap.get('id');
      const countryId = this.route.snapshot.paramMap.get('countryid');
      this.http
      .get(`https://api.mediehuset.net/overlook/cities/${cityId}`)
      .subscribe(data => {
        this.hotels = data;
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
    }
    goToHotelPage(hotelId, countryId){
      this.router.navigate(['/hotel', hotelId, countryId]);
    }
    refreshCities(cityId){
      this.http
      .get(`https://api.mediehuset.net/overlook/cities/${cityId}`)
      .subscribe(data => {
        this.hotels = data;
        console.log(this.hotels)
      });
    }

}
