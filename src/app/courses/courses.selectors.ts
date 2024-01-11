import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromCourses from "./courses.reducer";


export const selectCoursesState = createFeatureSelector<fromCourses.CoursesState>("courses");
export const getAllCourses = createSelector(selectCoursesState,
    fromCourses.selectAll
    )
export const selectBeginnerCourses = createSelector(getAllCourses,
    courses => courses.filter(course => course.category === 'BEGINNER'))
export const selectAdvancedCourses = createSelector(getAllCourses,
    courses => courses.filter(course => course.category ==='ADVANCED'))
export const selectPromoTotal= createSelector(getAllCourses,
    courses => courses.filter(course => course.promo).length) 
