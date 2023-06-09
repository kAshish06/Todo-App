import { getCategoriesApi } from "../services/categories.service";

export const getCategoriesQuery = async () => {
  return await getCategoriesApi();
};

export default getCategoriesQuery;
