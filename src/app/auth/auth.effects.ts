import { JsonpInterceptor } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";

@Injectable()
export class AuthEffects{
    constructor(private actions$:Actions){
        actions$.subscribe(action =>{
            if(action.type == '[Login component] User LoggedIn'){
                localStorage.setItem('user',JSON.stringify(action["user"]))
            }
        })
    }


}