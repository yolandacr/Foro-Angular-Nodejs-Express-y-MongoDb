import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Topic } from '../../../models/topic';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [UserService]
})
export class AddComponent {

  public page_title: string;
  public topic: Topic;
  public identity:any;
  public token: any;
  public status:any;

  constructor(
    private _route:ActivatedRoute,
    private _router: Router,
    private _userService:UserService
  ){
    this.page_title = 'Crear nuevo tema';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this. topic = new Topic('','','','','','',this.identity._id,null);
  }

  onSubmit(form:any){
    console.log(this.topic);
  }

}
