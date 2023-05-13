import { Address } from "../address/Address";
import { Order } from "../order/Order";

export type Customer = {
  address?: Address | null;
  createdAt: Date;
  email: string | null;
  id: string;
  orders?: Array<Order>;
  phone: string | null;
  updatedAt: Date;
};
