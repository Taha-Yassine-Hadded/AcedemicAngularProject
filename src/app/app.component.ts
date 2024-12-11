import {Component, DoCheck} from '@angular/core';
import {AuthentificationService} from "./services/AuthentificationService/authentification.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  isLogged! : Boolean;
  constructor(private _auth : AuthentificationService) {
    this.isLogged = this._auth.isLogged()
  }

  ngDoCheck(): void {
    this.isLogged = this._auth.isLogged()
  }


}
