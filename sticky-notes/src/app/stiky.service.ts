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
    var my_request = {
      "title" : title,
      "content" : content
    }
    return this.http.post(this.$baseUrl + '/api/post-list-create/?format=json',my_request,this.Options());

  }

  updatePostService(title,content,id) {
    var my_request = {
      "title" : title,
      "content" : content
    }
    return this.http.put(this.$baseUrl + '/api/post-detail/'+id+'/?format=json',my_request,this.Options());

  }

  deleteService(title,content,id) {
  
    return this.http.delete(this.$baseUrl + '/api/post-detail/'+id+'/?format=json',this.Options());

  }
  // getBlog() {
  //   return this.http.get(this.$baseUrl + '/blog/api/?format=json', this.Options());

  // }

  getNoteDetail(id) {
    return this.http.get(this.$baseUrl + '/api/post-detail/' + id , this.Options());

  }

  login(model){
console.log(model)
  let params= {
    email: model.email,
    password:model.password
  }
  
  return this.http.post(this.$baseUrl + '/api/login/',params,this.Options());
  }
  // httpOptions

  getProtectedData1() {
    return this.http.get(this.$baseUrl + '/api/protected-data/', this.Options1());
  }

  Options() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
    };
    return httpOptions;
  }
  Options1() {
    let key = localStorage.getItem('currentUser');
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + key
      })
    };
    return httpOptions;
    }
}



