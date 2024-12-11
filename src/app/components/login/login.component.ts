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
  errorMessage: string = '';
  user! : FormGroup;
  constructor(private fb : FormBuilder, private authService: AuthentificationService, private router : Router){
  }

  ngOnInit() {
    this.user= this.fb.group({
      email : ["", [Validators.email, Validators.required]],
      password : ["", [Validators.required]]
    })
    this.authService.isLogged() && this.router.navigate(['/home'])
  }

  login(): void {
    console.log(this.user)
    this.authService.singin(this.user.value).subscribe({
        next: (data: any) => {
          localStorage.setItem('access_token', data.accessToken);
          localStorage.setItem('role', data.user.role);
          this.router.navigate(['/home'])
        },
        error: (e: any) => {
          this.errorMessage = e.error;
        }
      }
    );
  }
}
