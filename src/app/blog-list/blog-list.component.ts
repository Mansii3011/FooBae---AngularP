import { Component, OnInit } from '@angular/core';
import {CommonService } from '../common.service';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  alert:boolean= false;
  public collection:any= [];
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.getBlogList().subscribe((result)=>{
      this.collection= result;
      console.log(this.collection)
    });
  }
  deleteBlog(blog){
    this.collection.splice(blog.id,-1)
    this.commonService.deleteBlog(blog).subscribe((result)=>{
      console.log("Data is Deleted Successfull !", result)
      this.alert= true;
    })
  }
  closeAlert(){
    this.alert= false;
  }
}