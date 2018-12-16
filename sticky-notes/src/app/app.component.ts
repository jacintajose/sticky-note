
import { Component } from '@angular/core';
import { StickyService } from './stiky.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sticky-notes';
  Data: Object;
  Project: Object;
  Blog: Object;
  constructor(private _stikyservice: StickyService) {
    this.getTutorialLists();
    this.getprojects();
    this. getBlog();

  }

  getTutorialLists() {
    this._stikyservice.getData()
    .subscribe( data => {
      console.log(data);
      this.Data = data;
    });
  }
  getprojects() {
    this._stikyservice.getProject()
    .subscribe( project => {
      console.log(project);
      this.Project = project;
    });
  }

  getBlog() {
    this._stikyservice.getBlog()
    .subscribe( blog => {
      console.log(blog);
      this.Blog = blog;
    });
  }
}
