import { Component } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
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
  public status: string = '';
  public identity: any;
  public token: any;

  constructor(
    private _userService:UserService,
    private _router: Router,
    private _rout: ActivatedRoute
  ){
    this.page_title = "Identifícate";
    this.user = new User('','','','','','','ROLE_USER');
  }

  onSubmit(form:any){
    //conseguir objeto completo del usuario logueado
    this._userService.signup(this.user).subscribe(
      response => {
        if(response.user && response.user._id){
          //guardamos el usuario en una propiedad
          this.identity = response.user;
          localStorage.setItem('identity', JSON.stringify(this.identity));

          //conseguir el token del usuario identificado
          this._userService.signup(this.user, true).subscribe(
            response => {
              if(response.token){
                //guardar el token del usuario en una propiedad
                this.token = response.token;
                localStorage.setItem('token', this.token);
                this.status = 'success';
                this._router.navigate(['/inicio']);
              }else{
                this.status = 'error';
              }
            },
            error => {
              this.status = 'error';
              console.log(error);
            });

        }else{
          this.status = 'error';
        }
      },
      error => {
        this.status = 'error';
        console.log(error);
      });

  }

}
