import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  usersData!:any

  constructor(private userData : DataService){
  }
  
  ngOnInit(): void {
    this.userData.getUsers().subscribe((data)=>{
      this.usersData=data
      console.log(this.usersData); 
    })
  }


}
