import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {

  events:Event[] = [];
  isLoading = false;
  constructor() {}

  ngOnInit(){
  }

  onDelete(){
  }
}

