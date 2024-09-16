import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
// import { WeatherData } from './models/weather2.model';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  weatherData?: WeatherData;
  cityName: string = 'Nairobi';
  config: any;

  constructor(private weatherservice: WeatherService) {}

  ngOnInit(): void {
    this.onSubmit();
    this.cityName = '';
  }

  onSubmit() {
    this.weatherservice.getWeatherData(this.cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      },
    });

    this.cityName = '';
  }
}
