import { Component, OnInit } from '@angular/core';
import { Hero }    from '../hero';
import { StickyService } from '../stiky.service';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  model = new Hero('','');
  submitted = false;
  
  constructor(private _stikyservice: StickyService) {
    this.createNewPost();

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
      console.log(data.id);
      var detail_url = "/details/"+data.id 
    });
  }

}
