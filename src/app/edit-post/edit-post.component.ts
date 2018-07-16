import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  formData: Object = {};
  post_id: number;

  constructor(private postService: PostService, private route: ActivatedRoute, private router:Router) { 

    // dapatkan url parameter

    this.route.params.subscribe(res => {
      console.log(res.id);
      this.post_id = res.id;
  });

}

  ngOnInit() {
    this.getPost(this.post_id);
  }
  
  getPost(id){
    console.log('Edit Post Di Sini');
    console.log(id);

  this.postService.getPost(id).subscribe(
    data => {
      console.log('berjaya panggil get POST API');
      console.log(data);

      //assign data to formData
      this.formData.title = data.title.rendered;
      this.formData.content = data.content.rendered;
      this.formData.status = data.status;
    }
  );
  }

  updatePost(id) {
    console.log('cuba update post');

    //set to publish
    this.formData.status = 'publish';

    this.postService.updatePost(this.post_id, this.formData).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['post']);
      }
    )
  }
}