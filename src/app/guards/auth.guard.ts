import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthentificationService} from "../services/AuthentificationService/authentification.service";


export const authGuard: CanActivateFn = (route, state, auth = inject(AuthentificationService), router = inject(Router)) => {
  if (auth.isLogged())
    return true;
  else {
    router.navigate(['/login'])
    return false;
  }
};
