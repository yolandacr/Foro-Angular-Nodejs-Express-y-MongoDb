import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params}  from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { global } from '../../services/global';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: [UserService]
})
export class UserEditComponent {

  public page_title:string;
  public user:User;
  public identity:any;
  public token: any;
  public status:string='';
  public afuConfig:any;
  public url: any;

  constructor(
    private _router:Router,
    private _route: ActivatedRoute,
    private _userService: UserService
  ){
    this.page_title = 'Ajustes de usuario';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.user = this.identity;
    this.url = global.url;

    this.afuConfig = {
      multiple: false,
      formatsAllowed: ".jpg, .jpeg, .png, .gif",
      maxSize: "50",
      uploadAPI: {
        url: this.url+"upload-avatar",
        headers: {
          "Authorization": this.token
        },
        params:{
          page:'1',
        },
        responseTyple:'json',
      },
      theme:"attachPin",
      hideProgressBar: false,
      hideResetBtn: true,
      hideSelectBtn: false,
      attachPinText:"Sube tu foto",
      replaceTexts: {
        selectFileBtn: 'Seleccione un archivo',
        resetBtn: 'Borrar',
        uploadBtn: 'Subir',
        dragNDropBox: 'Arrastre y suelte',
        attachPinBtn: 'Sube tu foto',
        afterUploadMsg_success: 'Subida exitosa !',
        afterUploadMsg_error: 'Subida erronea !',
        sizeLimit: 'Tamaño excedido',
      },
    };
  }

  avatarUpload(data:any) {
    let data_obj = data.body;
    console.log(data.body);
    this.user.image = data_obj.user.image;
  }

  ngOnInit(){

  }

  onSubmit(form:any){
    
    this._userService.update(this.user).subscribe(
      response => { 
        console.log(response.user);
        if(!response.user){
          this.status = 'error';
        }else{
          this.status = 'success';
          localStorage.setItem('identity', JSON.stringify(this.user));
        }
      },
      error => {
        this.status = 'error';
        console.log(error);
      }
    );
  }

}
