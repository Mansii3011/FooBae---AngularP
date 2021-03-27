import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBlogComponent} from './add-blog/add-blog.component';
import {BlogListComponent} from './blog-list/blog-list.component';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';



const routes: Routes = [
  {
    component:HomeComponent , path:''
  },
  {
    component:AddBlogComponent , path:'add'
  },
  {
    component:UpdateComponent, path:'update/:id'
  },
  // update/:id
  {
    component: BlogListComponent, path:'list'},

  {
    component:ContactComponent, path:'contact-form'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }