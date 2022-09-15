import { Component, Input, OnInit } from '@angular/core';
import { User } from '../Model';
import { UserService } from '../user.service';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() users: User[] = [];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  addUser(name:string,address:string,number:string)
  {
    const p = new User(0,name,address,number);
    this.userService.addUser(p).subscribe(user =>{
      this.users.push(user);
    });

  }

}
