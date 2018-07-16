import { Component, OnInit } from '@angular/core';
import { PageService } from '../page.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  pages: any;

  constructor(private pageService:PageService) { }

  ngOnInit() {
    this.getPages();
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

  deletePage(id){
    let choice = confirm('Are you sure to delete?');

    if (choice){

      console.log(id);

      this.pageService.deletePage(id).subscribe(
        data => {
          console.log('Berjaya delete API')

          this.getPages();
        }
      )
    }
  }

}
