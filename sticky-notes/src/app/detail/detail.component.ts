import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StickyService } from '../stiky.service';
import { Hero }    from '../hero';
import { RouterModule, Routes, Router } from '@angular/router';



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id: any;
  Data: Object;
  Details: any;
  formFlag = false; 
  delflag=false;
  server_response : any;



  model = new Hero('','');
  submitted = false;



  constructor(private route: ActivatedRoute, private _stikyservice: StickyService,public router: Router) {
    this.route.params.subscribe( (params: any) => {
      console.log(params);
      console.log('ID is ',params.id);
      this.id = params.id;
    });
   }

  ngOnInit() {
    this.getDetail();
  }

  onSubmit(){
    console.log("form submitted");
    console.log("printing new updated data") ;
    console.log(this.model.title) ;
    this.updateNewPost();

  }


  onEditClick(){
    console.log("edit button clicked");
    this.formFlag = true ;
  }

  onDeleteClick(){
    console.log("Delete buttton clicked");
    this.delflag =true;
    this.deleted();
  }

  getDetail() {
    this._stikyservice.getNoteDetail(this.id)
    .subscribe( data => {
      console.log(data);
      this.Details = data;
    });
  }

  updateNewPost() {
      this._stikyservice.updatePostService(this.model.title,this.model.content,this.Details.id)
      .subscribe( data => {
        this.server_response = data ;
        console.log("data updated sucessfully");
        console.log(data);
        this.Details = data;
        // this.route_to_detail_page();
        this.formFlag = false;
        this.router.navigateByUrl('/details/' + this.server_response.id);
      });
    }

    deleted() {
      this._stikyservice.deleteService(this.model.title,this.model.content,this.Details.id)
      .subscribe( data => {
        this.server_response = data ;
        console.log(data);
        console.log("data deleted sucessfully");
        this.router.navigateByUrl('/');
        // this.route_to_home_page();
      });
    }

    route_to_home_page(){
      if(this.server_response){
        this.router.navigateByUrl('/stiky');
      }
    }

    route_to_detail_page(){
      if(this.server_response){
        this.router.navigateByUrl('/details/' + this.server_response.id);
      }
    }
}
