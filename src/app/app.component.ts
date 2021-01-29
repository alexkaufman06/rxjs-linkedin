import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval} from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-linkedin';

  ngOnInit() {
    const numbers$ = interval(1000).pipe(take(5));

    numbers$.subscribe(x => console.log(x));
  }

  ngOnDestroy() {

  }
}
