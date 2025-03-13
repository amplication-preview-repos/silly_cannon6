import { SortOrder } from "../../util/SortOrder";

export type ConnectionOrderByInput = {
  connectedUser?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
