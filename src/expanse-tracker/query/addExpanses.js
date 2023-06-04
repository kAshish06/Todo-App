import { addExpanseApi } from "../services/expanses.service";

const addExpanseQuery = async (newExpansePayload) => {
  return await addExpanseApi(newExpansePayload);
};

export default addExpanseQuery;
