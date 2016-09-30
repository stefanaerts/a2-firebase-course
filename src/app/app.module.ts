import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireModule} from 'angularfire2';
import {firebaseConfig} from '../environments/firebase.config';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AFDatasourceService } from './af-datasource.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      AngularFireModule.initializeApp(firebaseConfig),

  ],
  providers: [AFDatasourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
