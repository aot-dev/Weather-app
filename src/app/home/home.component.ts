import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

interface dayWeather{
  name:string;
  temp:number;
  sunset:number;
  sunrise:number;
};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  cities = ['Paris','Amsterdam','London','Prague','Rome'];
  weatherData:dayWeather[]=[];
  constructor(private apiService: ApiService,
    private router: Router ) { }

  ngOnInit(): void {
    this.cities.forEach((name)=>{
      const isStored = localStorage.getItem(name)?JSON.parse(localStorage.getItem(name)!):null;
      if(isStored) {
        this.weatherData.push(JSON.parse(localStorage.getItem(name)!)) // if city's data is stored locally then skip api call
      } else {
        this.apiService.getCityWeather(name).subscribe((data:any)=>{
          const oneCity = {name:data.name, temp:data.main.temp, sunrise:data.sys.sunrise, sunset:data.sys.sunset};
          localStorage.setItem(name,JSON.stringify(oneCity));
          this.weatherData.push(oneCity); //stores weather data for cities
        })
      }
    })
  }
  //navigate to new page using city name where forecast of next 5 days would be shown
  goTodetails(name: string) {
    this.router.navigate(['/details', name]);
  }

}
