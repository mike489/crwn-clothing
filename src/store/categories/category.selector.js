import { createSelector } from "reselect";

const selelectCategoryReducer = (state) => state.categories;

export const selelectCategory = createSelector(
  [selelectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selelectCategory],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
