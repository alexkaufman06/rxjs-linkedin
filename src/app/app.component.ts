import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, of } from 'rxjs';
import { take, map, filter, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-linkedin';

  ngOnInit() {
    const numbers$ = interval(1000);
    const letters$ = of('a', 'b', 'c', 'd', 'e').pipe(
      mergeMap(x =>
        numbers$.pipe(
          take(5),
          map(i => i + x)
        )
      )
    );

    letters$.subscribe(x => console.log(x));
  }

  ngOnDestroy() {

  }
}
