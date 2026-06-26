import { Component } from '@angular/core';
import { exhaustMap } from 'rxjs';

@Component({
  selector: 'app-exhaust-map',
  imports: [],
  templateUrl: './exhaust-map.html',
  styleUrl: './exhaust-map.css',
})
export class ExhaustMap {
  //To be implemented when you want to cancel the prev request

  save() {
    of(null).pipe(
      exhaustMap((data) => this.http.saveUser()).subscribe((data) => {
        console.log(data);
      }),
    );
  }
}
