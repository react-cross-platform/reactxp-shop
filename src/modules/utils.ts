import { CategoryType } from "../typings/types";

interface Catalog {
  startCategories: CategoryType[];
  childrenMap: { [key: string]: CategoryType[] };
}

export const getCatalog = (categories: CategoryType[]): Catalog => {
  const catalog: Catalog = {
    startCategories: [],
    childrenMap: {}
  };
  for (const category of categories!) {
    if (category!.parent) {
      const key = category.parent!.id;
      if (!(key in catalog.childrenMap)) {
        catalog.childrenMap[key] = [];
      }
      catalog.childrenMap[key].push(category);
    } else {
      catalog.startCategories.push(category);
    }
  }
  return catalog;
};
