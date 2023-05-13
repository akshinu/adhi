import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  addressId?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
