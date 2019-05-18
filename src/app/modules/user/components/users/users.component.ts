import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  dataSource: Observable<any>;
  columns: string[] = [
    //'select',
    'customerID',
    'countryCode',
    'countryName',
    'mobilePhone',
    'email',
    'name_First',
    //'name_Last',
    //'birthday',
    //'address_Street',
    //'address_Additional',
    //'address_Zip',
    //'address_StateRegion',
    //'address_Country',
    'status',
    //'nationality',
    //'verifiedIdentity',
    'action'
  ];
  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.User_GetAll();

  }
  User_GetAll() {
    this.userService.User_GetAll().subscribe(
      (res: any) => {
        this.dataSource = res;
      },
      (error: any) => { },
      () => { }
    );
  }
}
