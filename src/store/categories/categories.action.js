import { CATEGORIES_TYPES } from "./categories.types";
import { createAction } from "../../utils/firebase/reducer";


export const setCategoriesMap = (categoriesMap) =>{
    createAction(CATEGORIES_TYPES.SET_CATEGORIES_MAP, categoriesMap);
} 