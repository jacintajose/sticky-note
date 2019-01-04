import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StickyService {
  $baseUrl = 'http://jessie.buildfromzero.com';

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.$baseUrl + '/api/post-list-create/?format=json', this.Options());
  }

  

  createPostService(title,content) {
    console.log("creating new post..")
    console.log(title);
    var my_request = {
      "title" : title,
      "content" : content
    }

    console.log(my_request);
    return this.http.post(this.$baseUrl + '/api/post-list-create/?format=json',
    my_request
    ,this.Options());

  }

  // getBlog() {
  //   return this.http.get(this.$baseUrl + '/blog/api/?format=json', this.Options());

  // }

  getNoteDetail(id) {
    return this.http.get(this.$baseUrl + '/api/post-detail/' + id , this.Options());

  }
  // httpOptions
  Options() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
    };
    return httpOptions;
  }

}

