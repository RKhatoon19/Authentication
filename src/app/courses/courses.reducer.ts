import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { Course } from "./model/course";
import { createReducer, on } from "@ngrx/store";
import { ActionCouses } from "./courses-type";

export interface CoursesState extends EntityState<Course>{

}
export const adapter= createEntityAdapter<Course>();
export const initialState = adapter.getInitialState();
export const courseReducer = createReducer(
    initialState,
    on(ActionCouses.allCoursesLoaded,
    (state,action)=>
        adapter.addMany(action.courses,state)
    )
)
export const {selectAll} = adapter.getSelectors();