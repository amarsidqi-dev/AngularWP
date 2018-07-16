import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http:HttpClient) { }

  getPages(){
    console.log('cuba panggil API PAGE');
    return this.http.get('http://restapi.jomphp.com/wp-json/wp/v2/pages');
  }
  
  getPage(id){
    console.log('panggil EDIT API POST')
    return this.http.get('http://restapi.jomphp.com/wp-json/wp/v2/pages/' + id);
  }

  createPage(data){
    console.log('cuba panggil API PAGE');

    //set authorization headers

    const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9yZXN0YXBpLmpvbXBocC5jb20iLCJpYXQiOjE1Mjk4MzMwNTQsIm5iZiI6MTUyOTgzMzA1NCwiZXhwIjoxNTMwNDM3ODU0LCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.By6L45kIp1L7wK2Tee2xaC2EkJpe3JtUpvpWnbnAJ8g'

    const headers = new HttpHeaders()
      .set('Authorization', token);

    return this.http.post('http://restapi.jomphp.com/wp-json/wp/v2/pages', data, { headers });
  }

  updatePage(id, data){
    console.log('cuba panggil update PAGE API');

    //set authorization headers

    const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9yZXN0YXBpLmpvbXBocC5jb20iLCJpYXQiOjE1Mjk4MzMwNTQsIm5iZiI6MTUyOTgzMzA1NCwiZXhwIjoxNTMwNDM3ODU0LCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.By6L45kIp1L7wK2Tee2xaC2EkJpe3JtUpvpWnbnAJ8g'
    
    const headers = new HttpHeaders()
      .set('Authorization', token);
    
      //post bertujuan untuk transfer information.
    return this.http.post('http://restapi.jomphp.com/wp-json/wp/v2/pages/' + id, data, { headers });
  }

  deletePage(id){
    console.log('cuba panggil delete PAGE API');

    //set authorization headers

    const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9yZXN0YXBpLmpvbXBocC5jb20iLCJpYXQiOjE1Mjk4MzMwNTQsIm5iZiI6MTUyOTgzMzA1NCwiZXhwIjoxNTMwNDM3ODU0LCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.By6L45kIp1L7wK2Tee2xaC2EkJpe3JtUpvpWnbnAJ8g'

    const headers = new HttpHeaders()
      .set('Authorization', token);
    
      return this.http.delete('http://restapi.jomphp.com/wp-json/wp/v2/pages/' + id, { headers });
  }
}