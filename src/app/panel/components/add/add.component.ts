import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Topic } from '../../../models/topic';
import { UserService } from '../../../services/user.service';
import { TopicService } from '../../../services/topic.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [UserService, TopicService]
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
    private _userService:UserService,
    private _topicService:TopicService
  ){
    this.page_title = 'Crear nuevo tema';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this. topic = new Topic('','','','','','',this.identity._id,null);
  }

  ngOnInit(){
    console.log(this._topicService.prueba());
  }

  onSubmit(form:any){
    console.log(this.topic);
  }

}
