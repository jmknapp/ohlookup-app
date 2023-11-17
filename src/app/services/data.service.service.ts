import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  constructor(private: http: HttpClient) { }

  getRemoteData() {
    return this.http.get(
      "http://ohlookup.com/ohlookup-app.php?firstname=alice&lastname=carroll"
    )
  }
}
