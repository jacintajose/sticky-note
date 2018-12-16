import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StickyService {
  $baseUrl = 'https://buildfromzero.com';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.$baseUrl + '/tutorials/api/?format=json', this.Options());
  }
getProject()
{
  return this.http.get(this.$baseUrl + '/projects/api/?format=json', this.Options());

}

getBlog()
{
  return this.http.get(this.$baseUrl + '/blog/api/?format=json', this.Options());

}
  // httpOptions
  Options() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
              'Content-Type' : 'application/json'
      })
    };
    return httpOptions;
  }

}

