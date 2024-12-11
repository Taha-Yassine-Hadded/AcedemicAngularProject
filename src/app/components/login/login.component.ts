import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from "../../services/AuthentificationService/authentification.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  user! : FormGroup;

  constructor(private fb : FormBuilder, private authService: AuthentificationService, private router : Router){
  }

  ngOnInit() {
    this.user= this.fb.group({
      email : ["", [Validators.email, Validators.required]],
      password : ["", [Validators.required]]
    })
  }

  login(): void {
    console.log(this.user)
    this.authService.singin(this.user.value).subscribe(
      (response) => {
        localStorage.setItem('access_token', response.accessToken);
        localStorage.setItem('role', response.user.role);
        this.router.navigate(['/home'])
      }
    );
  }
}
