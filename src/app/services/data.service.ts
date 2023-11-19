import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private searchqueryurl : string ;
  private detailqueryurl : string ;

  constructor(private httpClient: HttpClient) { } ;

  setSearchQueryUrl(url: string) {
    this.searchqueryurl = url ;
  }

  setDetailQueryUrl(url: string) {
    this.detailqueryurl = url ;
  }

  getSearchQueryData() {
    return this.httpClient.get(this.searchqueryurl) ;
  }

  getDetailQueryData() {
    return this.httpClient.get(this.detailqueryurl) ;
  }
}