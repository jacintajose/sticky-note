import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StickyService } from '../stiky.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id: any;
  Data: Object;
  Details: Object;

  constructor(private route: ActivatedRoute, private _stikyservice: StickyService) {
    this.route.params.subscribe( (params: any) => {
      console.log(params);
      console.log('ID is ',params.id);
      this.id = params.id;
    });
   }

  ngOnInit() {
    this.getDetail();
  }

  getDetail() {
    this._stikyservice.getNoteDetail(this.id)
    .subscribe( data => {
      console.log(data);
      this.Details = data;
    });

  }

}
