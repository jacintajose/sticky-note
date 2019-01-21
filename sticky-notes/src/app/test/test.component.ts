import { Component, OnInit } from '@angular/core';
import { StickyService } from '../stiky.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  test: any;

  constructor( private route: ActivatedRoute,public stickyservice: StickyService,public router: Router) {}
  
  ngOnInit() {
    this.getProtectedData();
  }


  getProtectedData() {
    this.stickyservice.getProtectedData1()
    .subscribe( data => {
      console.log(data);
      this.test = data;
      console.log(this.test);
    });
  }
}
