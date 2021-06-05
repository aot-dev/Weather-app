import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { };
  // fetcg weather of city using name
  getCityWeather(city:string) {
    const url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=3d8b309701a13f65b660fa2c64cdc517";
    return this.http.get(url);
  }
  //fetch forcasr for next n days using city name
  getUpcomingForcast(city:string, days:number) {
    const url = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&cnt="+days+"&appid=3d8b309701a13f65b660fa2c64cdc517";
    return this.http.get(url);
  }
}
