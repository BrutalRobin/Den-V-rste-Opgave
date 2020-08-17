import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BookComponent implements OnInit {
  ticket: any;
  number: number = 1;
  room: any;
  hotel: any;
  ticketId = this.route.snapshot.paramMap.get('id');
  koebForm = this.fb.group({
    hotelId: ['', Validators.required],
    værelsestype: ['', Validators.required],
    flex: ['', Validators.required],
    antalperson: ['', Validators.required],
    checkin: ['', Validators.required],
    checkout: ['', Validators.required],
    username: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    comment: ['', Validators.required],
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient) { }

  ngOnInit(): void {
    const roomId = this.route.snapshot.paramMap.get('roomid');
    const hotelId = this.route.snapshot.paramMap.get('hotelid');
    this.http
    .get(`https://api.mediehuset.net/overlook/rooms/${roomId}`)
    .subscribe(data => {
      this.room = data;
      this.roomid = this.room.item.id;
      console.log(this.roomid)
    });
    this.http
    .get(`https://api.mediehuset.net/overlook/hotels/${hotelId}`)
    .subscribe(data => {
      this.hotel = data;
      this.hotelid = this.hotel.item.id;
    });
  }
  comments: any;
  produkt: any;
  users: any;
  produkt_id: any;
  res: any;
  accesstoken: any;
  token = this.getCookie('token');
  userid = this.getCookie('user_id');
  commenters: any;
  angualar: any;
  firstName: any;
  lastName: any;
  roomid: any;
  hotelid: any;
  data: any;

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
  onSubmit() {
    const formData: any = new FormData();
    formData.append('user_id', this.userid);
    formData.append('hotel_id', this.hotelid);
    formData.append('room_id', this.roomid);
    formData.append('is_flex', this.koebForm.get('flex').value);
    formData.append('num_persons', this.koebForm.get('antalperson').value);
    formData.append('checkin', parseInt((new Date(this.koebForm.get('checkin').value).getTime() / 1000).toFixed(0)));
    formData.append('checkout', parseInt((new Date(this.koebForm.get('checkout').value).getTime() / 1000).toFixed(0)));
    this.data = parseInt((new Date(this.koebForm.get('checkout').value).getTime() / 1000).toFixed(0));
    console.log(this.data);
    formData.append('firstname', this.koebForm.get('username').value);
    formData.append('lastname', this.koebForm.get('lastName').value);
    formData.append('email', this.koebForm.get('email').value);
    formData.append('phone', this.koebForm.get('phone').value);
    formData.append('comment', this.koebForm.get('comment').value);
    console.log(formData);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getCookie('token')}`);
    this.http.post(`https://api.mediehuset.net/overlook/reservations`, formData, { headers }).subscribe((res: any) => {
      console.log(res);
      if (res.status === true) {
        window.alert('Tak for købet');
      }
    });
  }
  focus() {
    const errMessage = document.getElementsByClassName('error')[0].remove();
  }

}
