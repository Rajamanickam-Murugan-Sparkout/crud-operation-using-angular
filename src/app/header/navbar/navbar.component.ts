import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  postUsersData: any= [];

  constructor(private userData: DataService){
  }

  ngOnInit(): void {
    this.userData.getUsers().subscribe((data)=>{
      this.postUsersData=data
      console.log(this.postUsersData);
  })
}

addUserDetails = new FormGroup({
  'username': new FormControl('', [Validators.required]),
  'post': new FormControl('', Validators.required)
})

addUser(data: any){
  // console.log("User Data:", data);
  this.userData.addPost(data).subscribe((detail)=>{
    this.postUsersData= detail;
    console.log('Details', this.postUsersData);
  })
}


}
