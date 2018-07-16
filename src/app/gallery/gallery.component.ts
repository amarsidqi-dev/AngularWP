import { Component, OnInit } from '@angular/core';
import { MediaService } from '../media.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  medias: any;

  constructor(private mediaService:MediaService) { }

  ngOnInit() {
    this.getMedias();
  }

  getMedias(){
    this.mediaService.getMedias().subscribe(
      data => {
        console.log('berjaya panggil API MEDIA');
        console.log(data);

        console.log(this.medias);
        //assign data to media variable
        this.medias = data;

        console.log(this.medias);
      }
    )
  }

}