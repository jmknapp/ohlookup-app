import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private searchformData = [] ;

  constructor(private httpClient: HttpClient) { } ;

  getRemoteData() {
    return this.httpClient.get(
      "http://ohlookup.com/ohlookup-app.php?firstname=alice&lastname=carroll"
    )
  }
}