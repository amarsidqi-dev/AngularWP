import { Component } from '@angular/core';
import { PostService } from './post.service'; //1.1 akan muncul bila inject service constructor(private postService:PostService){}
import { PageService } from './page.service';
import { MediaService } from './media.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //declare variable sini
  title = 'app';
  posts: any; //double dot untuk any value
  pages: any;
  medias: any;

  //1.panggil service
  constructor(private postService:PostService, private pageService:PageService, private mediaService:MediaService){}

  //2. suruh buat kerja bila page load
  ngOnInit(){
    //2.1 suruh panggil post data dari API
    // this.getPosts();
    // this.getPages();
    // this.getMedias();
  }

  //3. panggil function getPosts() in PostService
  getPosts(){
    this.postService.getPosts().subscribe(
      data => {
        console.log('berjaya panggil API POST');
        console.log(data);

        console.log(this.posts);
        //assign data to post variable
        this.posts = data;

        console.log(this.posts);
      }
    );
  }

  getPages(){
    this.pageService.getPages().subscribe(
      data => {
        console.log('berjaya panggil API PAGE');
        console.log(data);

        console.log(this.pages);
        //assign data to page variable
        this.pages = data;

        console.log(this.pages);
      }
    )
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
