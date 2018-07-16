import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  formData: Object = {};

  constructor(private postService:PostService, private router:Router) { }

  ngOnInit() {
    console.log(this.formData);
  }

  createPost(){
    console.log('Submit Form CreatePost');

    //set to publish
    this.formData.status = 'publish';

    this.postService.createPost(this.formData).subscribe(
      data => {
        console.log(data);

        this.router.navigate(['post']);
  }

}
