import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Http {
  productUrl: string = 'https://fakestoreapi.com/carts/1';

  constructor(public http: HttpClient) {}

  public get(): Observable<any> {
    return this.http.get(this.productUrl);
  }

  public getSearchData(searchData: string): Observable<any> {
    return this.http.get(this.productUrl + searchData);
  }
}
