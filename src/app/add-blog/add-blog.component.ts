/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
*/

import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
 
})
export class AddBlogComponent implements OnInit {
  alert: boolean = false;
  addBlog= new FormGroup({
    id: new FormControl(''),
    Title: new FormControl(''),
    content: new FormControl('')
  })
  constructor(private blog: CommonService) { }

  ngOnInit(): void {
  }
  craeteBlog(){
      console.log(this.addBlog.value);
      this.blog.addBlog(this.addBlog.value).subscribe((result)=>{
      this.alert = true;
      this.addBlog.reset({});
      console.log("get data from service", result)
    })
  }
  closeAlert() {
    this.alert = false;
  }

}