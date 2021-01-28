import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {Event} from "../event.model";


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
})
export class EventListComponent implements OnInit {

  events:Event[] = [];
  isLoading = false;
  private eventsSub: Subscription;
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(){
    this.getEvents();
  }

  getEvents() {
    this.http.get<{ message: string, events: any }>(environment.baseUrl+'/api/events')
      .pipe(map((eventData) => {
        return eventData.events.map(event => {
          return {
            firstName: event.firstName,
            lastName: event.lastName,
            access: event.access,
            date: event.date,
            id: event._id,
          }
        })
      }))
      .subscribe((mappedEvents) => {
        this.events = mappedEvents;
      });
  }
}

