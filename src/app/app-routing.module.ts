import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { PostComponent } from './post/post.component';
import { PageComponent } from './page/page.component';
import { MediaComponent } from './media/media.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { EditPageComponent } from './edit-page/edit-page.component';

const routes: Routes = [
  {
    path: 'post',
    component: PostComponent
    children: []
  },
  {
    path: 'createpost',
    component: CreatePostComponent
    children: []
  },
  {
    path: 'editpost/:id',
    component: EditPostComponent
    children: []
  },
  {
    path: 'page',
    component: PageComponent
    children: []
  },
  {
    path: 'createpage',
    component: CreatePageComponent
    children: []
  },
  {
    path: 'editpage/:id',
    component: EditPageComponent
    children: []
  },
  {
    path: 'media',
    component: MediaComponent
    children: []
  },
  {
    path: 'gallery',
    component: GalleryComponent
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }