import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FeatureTogglesService {
  private baseUrl = "http://localhost:8080/v1/features";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private _httpClient: HttpClient) { }

  public getToggles() {
    return this._httpClient.get(this.baseUrl, this.httpOptions);
  }

  public createToggle(toggle: any) {
    return this._httpClient.post(this.baseUrl + "/create", toggle, this.httpOptions).pipe();
  }

  public updateToggle(toggle: any) {
    return this._httpClient.put(this.baseUrl + "/update", toggle, this.httpOptions).pipe();
  }

  public archiveToggle(toggleName: string) {
    return this._httpClient.post(this.baseUrl + `/archive/${toggleName}`, this.httpOptions).pipe();
  }

}
