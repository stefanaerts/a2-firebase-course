import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable} from 'angularfire2';
@Injectable()
export class AFDatasourceService {
courses$: FirebaseListObservable<any[]>;

constructor(af: AngularFire) {
  this.courses$ = af.database.list('courses');
}
  getCourses() {
    return this.courses$;
  }
}
