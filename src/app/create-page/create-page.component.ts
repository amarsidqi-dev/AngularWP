import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {

  formData: Object = {};

  constructor(private pageService:PageService, private router:Router) { }

  ngOnInit() {
    console.log(this.formData);
  }

  createPage(){
    console.log('Submit Form CreatePage');

    //Set to Publish
    this.formData.status = 'publish';

    this.pageService.createPage(this.formData).subscribe(
      data => {
        console.log(data);

        this.router.navigate(['page']);
      }
    )
  }

}
