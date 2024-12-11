import { Component } from '@angular/core';
import {AuthentificationService} from "../../services/AuthentificationService/authentification.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isAdmin: boolean = false;
  constructor(private auth : AuthentificationService) {
  }

  logout()  {
    this.auth.logout()
  }
}
