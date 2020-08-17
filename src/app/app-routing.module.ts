import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
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


const routes: Routes = [{ path: '', redirectTo: 'forside', pathMatch: 'full' },
{ path: 'forside', component: ForsideComponent, pathMatch: 'full' },
{ path: 'search/:id/:num', component: SearchResualtComponent, },
{ path: 'distinationer/:id', component: DestinationerComponent,  pathMatch: 'full' },
{ path: 'byer/:id/:countryid', component: ByerComponent, pathMatch: 'full' },
{ path: 'hoteller/:id', component: HotellerComponent, pathMatch: 'full' },
{ path: 'hotel/:hotelid/:countryid', component: HotelComponent, pathMatch: 'full' },
{ path: 'vaerelse/:id/:hotelid/:countryid/:cityname', component: VaerelseComponent, pathMatch: 'full' },
{ path: 'vaerelser', component: VaerelserComponent, pathMatch: 'full' },
{ path: 'vaerelsetype/:id', component: VaerelseTypeComponent, pathMatch: 'full' },
{ path: 'book/:roomid/:hotelid', component: BookComponent, pathMatch: 'full' },
{ path: 'login', component: LoginComponent, pathMatch: 'full' },
{ path: 'reservationer', component: ReservationerComponent, pathMatch: 'full' },
{ path: 'newsside/:id', component: NewssideComponent, pathMatch: 'full' },
{ path: 'news', component: NewsComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
