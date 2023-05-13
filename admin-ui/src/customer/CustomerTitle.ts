import { Customer as TCustomer } from "../api/customer/Customer";

export const CUSTOMER_TITLE_FIELD = "phone";

export const CustomerTitle = (record: TCustomer): string => {
  return record.phone || String(record.id);
};
