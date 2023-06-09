import { updateExpanseApi } from "../services/expanses.service";

export const updateExpanseQuery = async (data) => {
  return await updateExpanseApi(data.id, data.payload);
};
