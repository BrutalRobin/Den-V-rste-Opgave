import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-reservationer',
  templateUrl: './reservationer.component.html',
  styleUrls: ['./reservationer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReservationerComponent implements OnInit {
  reservationer: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    const token = this.getCookie('token');
    const user_id = this.getCookie('user_id');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.http
    .get(`https://api.mediehuset.net/overlook/reservations/list_by_user/${user_id}`, { headers })
    .subscribe(data => {
      this.reservationer = data;
      console.log(user_id)
      console.log(this.reservationer)
    });
  }
  getCookie(name: string): string {
    const nameLenPlus = (name.length + 1);
    return document.cookie
      .split(';')
      .map(c => c.trim())
      .filter(cookie => {
        return cookie.substring(0, nameLenPlus) === `${name}=`;
      })
      .map(cookie => {
        return decodeURIComponent(cookie.substring(nameLenPlus));
      })[0] || null;
  }
  deleteIt(id) {
    const token = this.getCookie('token');
    const user_id = this.getCookie('user_id');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.http.delete(`https://api.mediehuset.net/overlook/reservations/${id}`, { headers }).subscribe(
      (response: any) => {
        console.log(response.access_token);
        if (response.access_token) {
          return true;
        } else {
          return;
        }
      },
      error => console.log
    );
    setTimeout(() => {
      document.location.reload(true);
    }, 100);
  }

}
