import { HouseCreateNestedManyWithoutOwnersInput } from "./HouseCreateNestedManyWithoutOwnersInput";

export type OwnerCreateInput = {
  email?: string | null;
  houses?: HouseCreateNestedManyWithoutOwnersInput;
  name?: string | null;
  phoneNumber?: string | null;
};
