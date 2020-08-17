import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForsideComponent } from './forside/forside.component';
import { SearchResualtComponent } from './search-resualt/search-resualt.component';
import { DestinationerComponent } from './destinationer/destinationer.component';
import { ByerComponent } from './byer/byer.component';
import { HotellerComponent } from './hoteller/hoteller.component';
import { HotelComponent } from './hotel/hotel.component';
import { VaerelseComponent } from './vaerelse/vaerelse.component';
import { VaerelserComponent } from './vaerelser/vaerelser.component';
import { VaerelseTypeComponent } from './vaerelse-type/vaerelse-type.component';
import { BookComponent } from './book/book.component';
import { LoginComponent } from './login/login.component';
import { ReservationerComponent } from './reservationer/reservationer.component';
import { NewsComponent } from './news/news.component';
import { NewssideComponent } from './newsside/newsside.component';

@NgModule({
  declarations: [
    AppComponent,
    ForsideComponent,
    SearchResualtComponent,
    DestinationerComponent,
    ByerComponent,
    HotellerComponent,
    HotelComponent,
    VaerelseComponent,
    VaerelserComponent,
    VaerelseTypeComponent,
    BookComponent,
    LoginComponent,
    ReservationerComponent,
    NewsComponent,
    NewssideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
