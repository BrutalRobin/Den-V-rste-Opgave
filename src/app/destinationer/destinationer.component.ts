import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-destinationer',
  templateUrl: './destinationer.component.html',
  styleUrls: ['./destinationer.component.scss']
})
export class DestinationerComponent implements OnInit {
  citys: any;
  countries: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    const cityId = this.route.snapshot.paramMap.get('id');
    this.http
    .get(`https://api.mediehuset.net/overlook/countries/${cityId}`)
    .subscribe(data => {
      this.citys = data;
      console.log(this.citys)
    });
    this.http
    .get(`https://api.mediehuset.net/overlook/countries`)
    .subscribe(data => {
      this.countries = data;
    });
  }
  goToCityPage(cityId, countryid){
    this.router.navigate(['/byer', cityId, countryid]);
  }
  refreshCities(cityId){
  this.http
  .get(`https://api.mediehuset.net/overlook/countries/${cityId}`)
  .subscribe(data => {
    this.citys = data;
    console.log(this.citys)
  });
}

}
