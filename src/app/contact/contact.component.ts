import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  alert:boolean = false;
  contactUser= new FormGroup({
      name: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      message: new FormControl('')
  })
  constructor(private blog : CommonService) { }


  ngOnInit(): void {
  }
  regUser(){
    console.log(this.contactUser.value);
    this.blog.contactUser(this.contactUser.value).subscribe((result)=>{
      console.log(result,"data created sucessfull")
    })
  }

}