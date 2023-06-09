import { addCategoryApi } from "../services/categories.service";

const addCategoryQuery = async (newCategory) => {
  return await addCategoryApi(newCategory);
};

export default addCategoryQuery;
