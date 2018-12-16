
import { Component } from '@angular/core';
import { StikyService } from './stiky.service.';

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
  constructor(private _dataService: DataService) {
    this.getTutorialLists();
    this.getprojects();
    this. getBlog();

  }

  getTutorialLists() {
    this._dataService.getData()
    .subscribe( data => {
      console.log(data);
      this.Data = data;
    });
  }
  getprojects() {
    this._dataService.getProject()
    .subscribe( project => {
      console.log(project);
      this.Project = project;
    });
  }

  getBlog() {
    this._dataService.getBlog()
    .subscribe( blog => {
      console.log(blog);
      this.Blog = blog;
    });
  }
}
