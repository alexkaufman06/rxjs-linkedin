import { Component, OnInit, OnDestroy } from '@angular/core';
import {interval, of, fromEvent, Observable} from 'rxjs';
import { take, map, filter, mergeMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-linkedin';

  ngOnInit() {
    fromEvent(document, 'click').subscribe(x => console.log(x));
  }

  ngOnDestroy() {

  }
}
