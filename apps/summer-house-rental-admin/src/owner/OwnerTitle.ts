import { Owner as TOwner } from "../api/owner/Owner";

export const OWNER_TITLE_FIELD = "name";

export const OwnerTitle = (record: TOwner): string => {
  return record.name?.toString() || String(record.id);
};
