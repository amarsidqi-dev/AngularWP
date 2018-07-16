import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  getPosts(){
    console.log('cuba panggil API POST');
    return this.http.get('http://restapi.jomphp.com/wp-json/wp/v2/posts');
  }

  getPost(id){
    console.log('panggil EDIT API POST')
    return this.http.get('http://restapi.jomphp.com/wp-json/wp/v2/posts/' + id);
  }

  createPost(data){
    console.log('cuba panggil Create POST API');

    //set authorization headers

    const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9yZXN0YXBpLmpvbXBocC5jb20iLCJpYXQiOjE1Mjk4MzMwNTQsIm5iZiI6MTUyOTgzMzA1NCwiZXhwIjoxNTMwNDM3ODU0LCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.By6L45kIp1L7wK2Tee2xaC2EkJpe3JtUpvpWnbnAJ8g'
    
    const headers = new HttpHeaders()
      .set('Authorization', token);
    
    return this.http.post('http://restapi.jomphp.com/wp-json/wp/v2/posts', data, { headers });
  }

  updatePost(id, data){
    console.log('cuba panggil update POST API');

    //set authorization headers

    const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9yZXN0YXBpLmpvbXBocC5jb20iLCJpYXQiOjE1Mjk4MzMwNTQsIm5iZiI6MTUyOTgzMzA1NCwiZXhwIjoxNTMwNDM3ODU0LCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.By6L45kIp1L7wK2Tee2xaC2EkJpe3JtUpvpWnbnAJ8g'
    
    const headers = new HttpHeaders()
      .set('Authorization', token);
    
    return this.http.post('http://restapi.jomphp.com/wp-json/wp/v2/posts/' + id, data, { headers });
  }
  
  deletePost(id){
    console.log('cuba panggil delete POST API');

    //set authorization headers

    const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9yZXN0YXBpLmpvbXBocC5jb20iLCJpYXQiOjE1Mjk4MzMwNTQsIm5iZiI6MTUyOTgzMzA1NCwiZXhwIjoxNTMwNDM3ODU0LCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.By6L45kIp1L7wK2Tee2xaC2EkJpe3JtUpvpWnbnAJ8g'
    
    const headers = new HttpHeaders()
      .set('Authorization', token);
    
    return this.http.delete('http://restapi.jomphp.com/wp-json/wp/v2/posts/' + id, { headers });
  }
}