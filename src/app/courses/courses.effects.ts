import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ActionCouses } from "./courses-type";
import { concatMap, map } from "rxjs/operators";
import { CoursesHttpService } from "./services/courses-http.service";
import { TypedAction } from "@ngrx/store/src/models";
import { Observable } from "rxjs";
import { Course } from "./model/course";

@Injectable()
export class CoursesEffects{
    loadCourses$ = createEffect(
        () =>
        this.actions$.pipe(
            ofType(ActionCouses.loadAllCourses),
            concatMap(() =>this.coursesService.findAllCourses()),
            map(courses => ActionCouses.allCoursesLoaded({courses})
        )
    )
    )
    constructor(private actions$:Actions, private coursesService:CoursesHttpService){
        }
}



