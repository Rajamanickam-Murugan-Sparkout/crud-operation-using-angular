import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { UserInterface } from '../interface/interface';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  usersData: UserInterface[]=[];
  postUsersData:UserInterface[]=[];

  constructor(private userData : DataService){
  }
  
  ngOnInit(): void {
    this.userData.getUsers().subscribe((data)=>{
      this.usersData=data
      console.log(this.usersData); 
  })

    // this.userData.addNewUser({}).subscribe((post)=>{
    //   this.postUsersData= post;
    //   console.log(post);
    // })

  }


}
