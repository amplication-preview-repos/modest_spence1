import { HouseUpdateManyWithoutOwnersInput } from "./HouseUpdateManyWithoutOwnersInput";

export type OwnerUpdateInput = {
  email?: string | null;
  houses?: HouseUpdateManyWithoutOwnersInput;
  name?: string | null;
  phoneNumber?: string | null;
};
