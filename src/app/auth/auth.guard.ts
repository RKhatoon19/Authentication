import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "../reducers";
import { Injectable } from "@angular/core";
import { isLoggedIn } from "./auth.selectors";
import { tap } from "rxjs/operators";


@Injectable()
export class AuthGuard implements CanActivate{
    
constructor(private store:Store<AppState>, private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
       return this.store.pipe(select(isLoggedIn),
       (tap(isLoggedIn=>{
        if(!isLoggedIn){
            this.router.navigateByUrl('/login');
        }
    }))
       )
}
       

}