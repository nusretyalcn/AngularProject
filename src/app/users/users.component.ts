import { Component, OnInit } from '@angular/core';
import { User } from '../Model';
import { UserService } from '../user.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 
  users: User[] = [];
  
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers()
  {
    this.userService.getUsers().subscribe(users => 
    {
      this.users = users;
    });
  }

  deleteUser(user:User)
  {
    this.userService.deleteUser(user).subscribe(p=>{
      this.users.splice(this.users.findIndex(p=>p.userId==user.userId),1)
    });
    this.ngOnInit();
  }
}
