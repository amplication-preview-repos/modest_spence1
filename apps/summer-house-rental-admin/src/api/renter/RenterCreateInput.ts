import { RentalCreateNestedManyWithoutRentersInput } from "./RentalCreateNestedManyWithoutRentersInput";

export type RenterCreateInput = {
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  rentals?: RentalCreateNestedManyWithoutRentersInput;
};
