import { getExpansesApi } from "../services/expanses.service";

const getExpansesQuery = async () => {
  //   const id = queryKey[0];
  return await getExpansesApi();
};

export default getExpansesQuery;
