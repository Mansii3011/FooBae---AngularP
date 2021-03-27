import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  alert:boolean = false;
  editBlog= new FormGroup({
    id: new FormControl(''),
    Title: new FormControl(''),
    content: new FormControl('')
  })
  constructor(private blog:CommonService, private router:ActivatedRoute) { }


  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.blog.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
      this.editBlog= new FormGroup({
        id: new FormControl(result['id']),
        Title: new FormControl(result['Title']),
        content: new FormControl(result['content'])
      })
    })
  }
  updateBlog(){
    this.blog.updateBlog(this.router.snapshot.params.id,this.editBlog.value).subscribe((result)=>{
      console.log(result,"data updated successfully")
      this.alert=true;
    })
  }
  closeAlert(){
    this.alert=false;
  }

}