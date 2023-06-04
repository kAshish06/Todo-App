import { deleteExpanseApi } from "../services/expanses.service";

export const deleteExpanseQuery = async (id) => {
  return await deleteExpanseApi(id);
};
