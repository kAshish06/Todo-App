import { getCategoriesApi } from "../services/categories.service";

const getCategoriesQuery = async () => {
  return await getCategoriesApi();
};

export default getCategoriesQuery;
