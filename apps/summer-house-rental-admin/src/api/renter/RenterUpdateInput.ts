import { RentalUpdateManyWithoutRentersInput } from "./RentalUpdateManyWithoutRentersInput";

export type RenterUpdateInput = {
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  rentals?: RentalUpdateManyWithoutRentersInput;
};
