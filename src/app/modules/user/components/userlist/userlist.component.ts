import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  //@Input() data: any[];
  users$: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.User_GetAll();

  }
  User_GetAll() {
    this.userService.User_GetAll().subscribe(
      (res: any) => {
        this.users$ = res;
      },
      (error: any) => { },
      () => { }
    );
  }

}
