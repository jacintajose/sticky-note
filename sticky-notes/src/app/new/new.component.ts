import { Component, OnInit } from '@angular/core';
import { Hero }    from '../hero';
import { StickyService } from '../stiky.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  model = new Hero('','');
  submitted = false;
  server_response : any;
  
  constructor(private _stikyservice: StickyService, public router: Router) {
    // this.createNewPost();

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
      this.server_response = data ;
      console.log(data);
      console.log("data posted sucessfully");
      var detail_url = "/details/"+ this.server_response.id ;
      console.log(detail_url);
      this.route_to_detail_page();
    });
  }

  route_to_detail_page(){
    if(this.server_response){
      this.router.navigateByUrl('/details/' + this.server_response.id);
    }
  }

}
