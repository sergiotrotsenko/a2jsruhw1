import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { DescriptionComponent } from './description/description.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { FilterListPipe } from './common/pipes/pipes.pipe';
import { HotelComponent } from './hotel/hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    DescriptionComponent,
    HotelsListComponent,
    HotelComponent,
    FilterListPipe
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
