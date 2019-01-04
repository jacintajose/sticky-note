import { Component, OnInit } from '@angular/core';
import { Hero }    from '../hero';
import { StickyService } from '../stiky.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  model = new Hero('','');

  submitted = false;
  server_response : Object


  constructor(private _stikyservice: StickyService) {
    this.createNewPost();
    // this.getprojects();
    // this. getBlog();

  }
  

  onSubmit() {
     this.submitted = true;
     console.log(this.model.title);
     console.log(this.model.content);
     this.createNewPost();
    }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newHero() {
    this.model = new Hero('', '');
  }

  createNewPost() {
    this._stikyservice.createPostService(this.model.title,this.model.content)
    .subscribe( data => {
      console.log(data);
      this.server_response = data;
      console.log(this.server_response);
    });
  }

}
