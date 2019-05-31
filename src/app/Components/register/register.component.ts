import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { PasswordValidation } from '../../validations/validators';
import { Router } from '@angular/router';
import { AuthLoginService } from '../../services/auth-login.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
users=["Person","Place"];
countries=['Egypt'];
cities=['Ismailia','Suez','Port-Said','Cairo'];
  constructor( private router: Router, 
    private authService: AuthLoginService) { }
  form = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    username : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required]),
    confirmPwd : new FormControl('',[Validators.required]),
    country: new FormControl(),
    city:new FormControl(),
    phone : new FormControl(),
    user: new FormControl('',[Validators.required])

  },{
    validators: PasswordValidation.MatchPassword
  })
  
 
  getEmail(){
    return this.form.get('email');
  }

  getUserName(){
    return this.form.get('username');
  }
  getPassword(){
    return this.form.get('password');
  }
  getConfirmPwd(){
    return this.form.get('confirmPwd');
  }
  getUser(){
    return this.form.get('user');
  }
  getPhone(){
    return this.form.get('phone');
  }

  getErrorMessageEmail() {
    return this.getEmail().hasError('required') ? 'Email is Required' :
        this.getEmail().hasError('email') ? 'Not a valid email' :
            '';
  } 
  getErrorMessageUserName() {
    return this.getUserName().hasError('required') ? 'UserName is Required' :'';
  }
  getErrorMessagePwd(){
    return this.getPassword().hasError('required') ? 'Password is Required' :'';
  }
  getErrorMessageCPwd(){
    return this.getConfirmPwd().hasError('required') ? 'Confirm Password is Required' :
    this.getConfirmPwd().hasError('MatchPassword')?'must match':'';
  }
  getErrorMessageUser(){
    return this.getUser().hasError('required') ? 'Must Select the Kind of User' :'';
  }
  
  signup(){
    this.authService.login(this.getEmail().value, this.getPassword().value)
      .subscribe(result => { 
        // if (result)
          this.router.navigate(['/']);
        // else  
        //   this.invalidLogin = true; 
      });
  }

  ngOnInit() {
  }

}
