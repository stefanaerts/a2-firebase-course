import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Rx';
import { Lesson } from './shared/model/lesson';

@Injectable()
export class AFDatasourceService {

constructor(private af: AngularFire) {
}
getLessons(): Observable<Lesson[]> {
    return this.af.database.list('lessons');
  }
}
