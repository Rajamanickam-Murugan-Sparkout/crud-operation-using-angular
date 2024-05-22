import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  usersUrl: string = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get(this.usersUrl)
  }

  getPostData(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  addPost(data: any){
    return this.http.post('https://jsonplaceholder.typicode.com/posts',data)
  }

  // addUser(data: UserInterface){
  //   return this.http.post(this.usersUrl,data)
  // }
  
  addNewUser({}): Observable<any>{
    const header = new HttpHeaders({
      contentType : 'application/json'
    })
    return this.http.post(this.usersUrl,{
          name: 'raj',
          email: 'raj@gmail.com',
          company: 'sparkout',
    }, {headers: header})
  }
}
