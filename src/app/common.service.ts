
import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
URL= "http://localhost:3000/blog"
regURL="http://localhost:3000/users"
  constructor(private _http:HttpClient) { }
  getBlogList(){
  return this._http.get(this.URL);
  console.log("this method is worked !")
  
  }

  addBlog(data: any){
    return this._http.post(this.URL, {...data,id:new Date().getTime().toString()});
  }
  deleteBlog(id: any){
    return this._http.delete(`${this.URL}/${id}`)
  }
  getCurrentData(id: any){
    return this._http.get(`${this.URL}/${id}`)
  }
  updateBlog(id: any,data: any){
    return this._http.put(`${this.URL}/${id}`,data)
  }

  contactUser(data: any){
    return this._http.post(this.regURL, data);
  }
}
