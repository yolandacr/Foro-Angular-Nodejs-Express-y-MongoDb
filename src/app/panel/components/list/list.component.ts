import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Topic } from '../../../models/topic';
import { UserService } from '../../../services/user.service';
import { TopicService } from '../../../services/topic.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [UserService, TopicService]
})
export class ListComponent {

  public page_title: string;
  public topics: Array<Topic>;
  public identity:any;
  public token: any;
  public status:any;

  constructor(
    private _route:ActivatedRoute,
    private _router: Router,
    private _userService:UserService,
    private _topicService:TopicService
  ){
    this.page_title = 'Mis temas';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.topics = [];
  }

  ngOnInit(){
    this.getTopics();
  }

  getTopics(){
    var userId = this.identity._id;
    this._topicService.getTopicsByUser(userId).subscribe(
      response => {
        if(response.topics){
          this.topics = response.topics;
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  deleteTopic(id:any){
    this._topicService.delete(this.token,id).subscribe(
      response => {
        this.getTopics();
      },
      error => {
        console.log(error);
      }
    )
  }

}
