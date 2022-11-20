import { takeLatest, all, call, put } from "redux-saga/effects";

import { getCategoriesAndDocments } from "../../utils/firebase/firebase.utils";

import {
  fetchCategoriesSuccess,
  fetchCategoriesfailed,
} from "./category.action";

import { CATEGORIES_ACTION_TYPES } from "./category.types";


export function* fetchCategoriesAsync() {
    try {
    const categoriesArray = yield call(getCategoriesAndDocments, "categories");
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesfailed(error));
  }  
}


export function* onfetchCategories(){
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSaga() {
    yield all([call(onfetchCategories)])
}