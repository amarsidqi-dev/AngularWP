import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { PostComponent } from './post/post.component';
import { PageComponent } from './page/page.component';
import { MediaComponent } from './media/media.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { EditPageComponent } from './edit-page/edit-page.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    PostComponent,
    PageComponent,
    MediaComponent,
    CreatePostComponent,
    CreatePageComponent,
    EditPostComponent,
    EditPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
