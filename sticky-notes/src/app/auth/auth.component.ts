
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StickyService } from '../stiky.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']

})
export class AuthComponent implements OnInit {
  authType: String = '';
  title: String = '';
  isSubmitting: boolean = false;
  authForm: FormGroup;
  model: any = {
    username: ''
  };
  testUsername = 'info@technorip.com';
  testPassword = '11223344';
  success: boolean;
    failed: boolean;


  constructor(
    private route: ActivatedRoute, public stickyservice: StickyService
  ) {
    // use FormBuilder to create a form group
    // this.authForm = this.fb.group({
    //   'email': ['', Validators.required],
    //   'password': ['', Validators.required]
    // });
  }

  ngOnInit() {
    this.route.url.subscribe(data => {
      // Get the last piece of the URL (it's either 'login' or 'register')
      this.authType = data[data.length - 1].path;
      // Set a title for the page accordingly
      this.title = (this.authType === 'login') ? 'Sign In' : 'Sign Up';
      // add form control for username if this is the register page
      if (this.authType === 'register') {
        // this.authForm.addControl('username', new FormControl('', Validators.required));
      }
    });
  }

  submitForm() {
   // this.isSubmitting = true;
 this.success=false;
  this.failed=false;
  this.stickyservice.login(this.model)
  .subscribe( (res: any) => {
    console.log(res);
    if(res.authKey) {
      localStorage.setItem("currentUser", res.authKey);
    } else {
      console.log('Error!');
    }
    
  })

    // let credentials = this.authForm.value;
    // check out what you get!
    // console.log(this.model);
    // console.log(this.testUsername);
    // console.log(this.testPassword);
    if(this.model.email==this.testUsername && this.model.password==this.testPassword){
      console.log("login successful");
      this.success=true;
    } else {
      console.log("login unsuccessful")
      this.failed=true;

    }
  }
  onclickk(){
   console.log();
  }
}