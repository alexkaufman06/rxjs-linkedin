import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-linkedin';
  observable$;
  mySubject$;

  ngOnInit() {
    // Observable is a function that takes in an observer (outer container that we subscribe to)
    // Observable will keep listening for changes to you want to watch out for memory links (don't leave subscribe open)
    // An Observable is the outer wrapper that allows you to listen to an observer
    // Each new Observable is it's own instance
    this.observable$ =  new Observable((observer) => {
      observer.next(1); // observer also has error method, it listens to whatever you want to listen to
                              // (inner trigger that fires off when something changes)
      observer.next(2);
      observer.next(3);
      observer.complete();
    });

    this.observable$.subscribe(
      value => console.log(value),
      err => {},
      () => console.log('this is the end')
    );

    // Subject is both an observer and an Observable
    // Subjects are shareable but not reusable (once you call error/complete it's dead)
    // BehaviorSubject requires initial value as argument and holds the most recent value for any new subscribers
    // Replay subject will save all values and give them to each subscriber even after it has completed (no initial value)
    this.mySubject$ = new Subject();
    this.mySubject$.subscribe(x => console.log('first subscribe ', x));
    this.mySubject$.next(1);
    this.mySubject$.next(2);
    this.mySubject$.subscribe(x => console.log('second subscribe ', x));
    this.mySubject$.next(3);
    // ** RATHER THAN USING .complete() use .unsubscribe() so you get an error rather than a silent failure
  }

  ngOnDestroy() {
    this.observable$.unsubscribe();
    this.mySubject$.unsubscribe();
  }
}
