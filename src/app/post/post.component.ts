import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: any;

  constructor(private postService:PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(){
    this.postService.getPosts().subscribe(
      data => {
        console.log('berjaya panggil API POST');
        console.log(data);

        console.log(this.posts);
        // assign data to post variable
        this.posts = data;

        console.log(this.posts);
      }
    )
  }

  deletePost(id){
    let choice = confirm('Are you sure to delete?');

    if (choice) {

      console.log(id);

      this.postService.deletePost(id).subscribe(
        data => {
          console.log('Berjaya panggil DELETE API');

          this.getPosts();
        }
      )

    }
  }

}