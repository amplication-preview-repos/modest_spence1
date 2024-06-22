import { Renter as TRenter } from "../api/renter/Renter";

export const RENTER_TITLE_FIELD = "name";

export const RenterTitle = (record: TRenter): string => {
  return record.name?.toString() || String(record.id);
};
