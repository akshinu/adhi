import { BloodType as TBloodType } from "../api/bloodType/BloodType";

export const BLOODTYPE_TITLE_FIELD = "id";

export const BloodTypeTitle = (record: TBloodType): string => {
  return record.id || String(record.id);
};
