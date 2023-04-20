import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent {
  public page_title: string;
  public user: User;

  constructor(private _userService:UserService
  ){
    this.page_title = "Identifícate";
    this.user = new User('','','','','','','ROLE_USER');
  }

  onSubmit(form:any){
    console.log(this.user);

  }

}
