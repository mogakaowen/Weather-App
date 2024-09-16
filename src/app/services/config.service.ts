// src/app/config.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private configUrl = '/.netlify/functions/config'; // URL of the serverless function

  constructor(private http: HttpClient) {}

  // Load config from serverless function
  loadConfig(): Observable<any> {
    return this.http.get<any>(this.configUrl).pipe(
      tap((configData) => {
        // Update environment variables dynamically
        environment.XRapidAPIHostHeaderName =
          configData.XRapidAPIHostHeaderName;
        environment.XRapidAPIHostHeaderValue =
          configData.XRapidAPIHostHeaderValue;
        environment.XRapidAPIHeaderKeyName = configData.XRapidAPIHeaderKeyName;
        environment.XRapidAPIHeaderKeyValue =
          configData.XRapidAPIHeaderKeyValue;
        environment.weatherApi = configData.weatherApi;
      })
    );
  }
}
