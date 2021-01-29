import { Component, OnInit, OnDestroy } from '@angular/core';
import {interval, of, fromEvent, Observable, Subject} from 'rxjs';
import {take, map, filter, mergeMap, switchMap, debounceTime, distinctUntilChanged, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient) {
  }
  title = 'rxjs-linkedin';
  searchSubject$ = new Subject<string>();
  results$: Observable<any>;

  ngOnInit() {
    this.results$ = this.searchSubject$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      tap(x => console.log('do', x)),
      switchMap(searchString => this.queryApi(searchString))
    );
  }

  queryApi(searchString: string) {
    console.log('queryAPI', searchString);
    return this.http.get(`https://www.reddit.com/r/aww/search.json?q=${searchString}`).pipe(
      map( (result: any) => result.data.children)
    );
  }

  inputChanged($event) {
    console.log('input changed: ', $event);
    this.searchSubject$.next($event);
  }

  ngOnDestroy() {

  }
}
