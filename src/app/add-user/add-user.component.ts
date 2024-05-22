import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { UserInterface } from '../interface/interface';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{

  postUsersData: any = [];

  constructor(private userData: DataService){
  }

  ngOnInit(): void {

  }

  addUserDetails = new FormGroup({
    'name': new FormControl('', [Validators.required]),
    'email': new FormControl('',[Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    'companyName': new FormControl('', [Validators.required])
  })

  addUser(data: any){
    // console.log("User Data:", data);
    this.userData.addPost(data).subscribe((detail)=>{
      this.postUsersData= detail;
      console.log('Details', this.postUsersData);
    })
  }

  // addUser() {
  //   if (this.addUserDetails.value) {
  //     // console.log(this.addUserDetails.value);
  //     this.postUsersData = this.addUserDetails.value
  //     // console.log(this.addUserDetails.get('gender.value'));
  //     console.log(this.postUsersData);
      
  //   } else {
  //     console.error('Form is invalid');
  //   }
  // }
}
