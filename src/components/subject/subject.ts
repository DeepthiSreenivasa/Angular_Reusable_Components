import { Component } from '@angular/core';

@Component({
  selector: 'app-subject',
  imports: [],
  templateUrl: './subject.html',
  styleUrl: './subject.css',
})
export class Subject {
  // const subject = new Subject<number>();
  // // will send values only after subscribers have subscribed eg: LiveChat if you join late  you only see new messages
  // subject.next(1);
  // subject.subscribe(data=>console.log(data))
  // const subject = new BehaviorSubject<number>(0)
}
