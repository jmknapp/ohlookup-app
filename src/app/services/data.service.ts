import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private queryurl : string ;

  constructor(private httpClient: HttpClient) { } ;

  setQueryUrl(url: string) {
    this.queryurl = url ;
  }

  getRemoteData() {
    return this.httpClient.get(this.queryurl) ;
  }
}