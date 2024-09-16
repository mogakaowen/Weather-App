import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  weatherData?: WeatherData;
  cityName: string = 'Nairobi';
  isLoading: boolean = false;
  isError: boolean = false;
  constructor(private weatherservice: WeatherService) {}

  ngOnInit(): void {
    this.onSubmit();
    this.cityName = '';
  }

  onSubmit() {
    this.isLoading = true;
    this.isError = false;
    this.weatherData = undefined;

    this.weatherservice.getWeatherData(this.cityName).subscribe({
      next: (response) => {
        if (response.cod === 404) {
          this.isError = true;
          this.isLoading = false;
        } else {
          this.weatherData = response;
          this.isLoading = false;
        }
      },
      error: (err) => {
        this.isLoading = false;
        this.isError = true;
      },
    });

    this.cityName = '';
  }
}
