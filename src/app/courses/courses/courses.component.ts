import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[]
  displayedColumns = ['name', 'category']


  constructor() {
    this.courses = [
      { _id: '1', name: 'Angular', category: 'Front-End' },
      { _id: '2', name: '.NET', category: 'Back-End' }
    ]
  }

  ngOnInit(): void {
    console.log('cursos', this.courses);
    
  }

}
