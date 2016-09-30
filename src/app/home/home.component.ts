import { Component, OnInit } from '@angular/core';
import { AFDatasourceService } from '../af-datasource.service';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lessons: Lesson[];
  constructor(private afdataservice: AFDatasourceService) {

  }

  ngOnInit() {
    this.afdataservice.getLessons().subscribe(lessons => this.lessons = lessons);
  }

}
