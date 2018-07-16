import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {

  formData: Object = {};
  page_id: number;

  constructor(private pageService: PageService, private route: ActivatedRoute, private router:Router) {

    //dapatkan url parameter

    this.route.params.subscribe(res => {
      console.log(res.id);
      this.page_id = res.id;
    })
   }

  ngOnInit() {
    this.getPage(this.page_id);
  }

  getPage(id){
    console.log('berjaya panggil API EDIT PAGE');
    console.log(id);

  this.pageService.getPage(id).subscribe(
    data => {
      console.log('berjaya panggil get PAGE API');
      console.log(data);

      //assign data to formData
      this.formData.title = data.title.rendered;
      this.formData.content = data.content.rendered;
      this.formData.status = data.status;
    }
  );
  }

  updatePage(id){
    console.log('cuba dapatkan update PAGE');

    //set to publish
    this.formData.status = 'publish';

    this.pageService.updatePage(this.page_id, this.formData).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['page']);
      }
    )
  }

}