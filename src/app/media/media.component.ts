import { Component, OnInit } from '@angular/core';
import { MediaService } from '../media.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

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
