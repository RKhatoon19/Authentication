import { JsonpInterceptor } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthActions } from "./actions-types";
import { tap } from "rxjs/operators";

@Injectable()
export class AuthEffects{
    login$ = createEffect(()=>
        this.actions$.pipe
        (ofType(AuthActions.login),
        tap(action=>{
            localStorage.setItem('user',JSON.stringify(action.user))
        })
        ),
        {dispatch: false} // so that user only store once in localstorage 
    )
    constructor(private actions$:Actions){
    }


}