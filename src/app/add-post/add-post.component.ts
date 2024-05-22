import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {

  postUsersData: any= [];
  getPostData: any= [];

  constructor(private userData: DataService){
  }

  ngOnInit(): void {
    this.userData.getUsers().subscribe((data)=>{
      this.postUsersData=data
      console.log(this.postUsersData);
  })

  this.userData.getPostData().subscribe((data)=>{
    this.getPostData = data;
    console.log(this.getPostData);
  })
}

addUserDetails = new FormGroup({
  'title': new FormControl('', Validators.required),
  'body': new FormControl('', Validators.required)
})

// addUser(data: any){

// }

addUser(data: any){
  this.userData.addPost(data).subscribe((detail)=>{
    this.postUsersData= detail;
    console.log('Details', this.postUsersData);
  })
  // console.log(this.addUserDetails.value);
}

// addUser(data: any){
//   // console.log("User Data:", data);
//   this.userData.addUser(data).subscribe((detail)=>{
//     this.postUsersData= detail;
//     console.log('Details', this.postUsersData);
//   })
// }

}