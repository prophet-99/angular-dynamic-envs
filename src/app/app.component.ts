import { Component, OnInit } from '@angular/core';

import { createApi } from 'unsplash-js';
import { EMPTY, Observable, delay, of } from 'rxjs';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent implements OnInit {
  public unsplashItems$: Observable<any> = EMPTY;

  async ngOnInit(): Promise<void> {
    const unsplashAPI = createApi({
      accessKey: environment.UNSPLASH_API_KEY,
    });
    const res = await unsplashAPI.photos.list({ page: 1, perPage: 12 });
    if (res.type === 'success') {
      this.unsplashItems$ = of(res.response.results).pipe(delay(600));
    }
  }
}
