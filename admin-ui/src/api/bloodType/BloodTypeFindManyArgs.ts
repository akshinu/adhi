import { BloodTypeWhereInput } from "./BloodTypeWhereInput";
import { BloodTypeOrderByInput } from "./BloodTypeOrderByInput";

export type BloodTypeFindManyArgs = {
  where?: BloodTypeWhereInput;
  orderBy?: Array<BloodTypeOrderByInput>;
  skip?: number;
  take?: number;
};
