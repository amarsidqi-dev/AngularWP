import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http:HttpClient) { }

  getMedias(){
    console.log('cuba panggil API MEDIA');
    return this.http.get('http://restapi.jomphp.com/wp-json/wp/v2/media');
  }
}
