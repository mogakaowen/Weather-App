import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

import { Observable, catchError, throwError } from 'rxjs';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(city: string): Observable<WeatherData> {
    const weatherDataUrl = `${environment.weatherApi}/${city}/en`;

    const headers = new HttpHeaders()
      .set(
        environment.XRapidAPIHostHeaderName,
        environment.XRapidAPIHostHeaderValue
      )
      .set(
        environment.XRapidAPIHeaderKeyName,
        environment.XRapidAPIHeaderKeyValue
      );

    return this.http.get<WeatherData>(weatherDataUrl, { headers });
  }
}
