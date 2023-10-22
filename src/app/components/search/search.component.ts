import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Topic } from '../../models/topic';
import { TopicService } from '../../services/topic.service';

@Component({
  selector: 'app-search',
  templateUrl: '../topics/topics.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ TopicService ]
})
export class SearchComponent {
  public page_title:string;
  public topics: Topic[] = [];
  public totalPages:any;
  public page:any;
  public next_page:any;
  public prev_page:any;
  public number_pages:any;
  public no_paginate:any;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _topicService:TopicService
  ){
    this.page_title = 'Buscar: ';
    this.no_paginate = true;
  }

  
  ngOnInit(){
    this._route.params.subscribe(params => {
      var search = params['search'];
      this.page_title = this.page_title +' '+ search;
      this.getTopics(search);
    });
  }

  getTopics(search:any){
    this._topicService.search(search).subscribe(
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

}
