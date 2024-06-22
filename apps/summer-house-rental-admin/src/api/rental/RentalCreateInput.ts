import { HouseWhereUniqueInput } from "../house/HouseWhereUniqueInput";
import { RenterWhereUniqueInput } from "../renter/RenterWhereUniqueInput";

export type RentalCreateInput = {
  endDate?: Date | null;
  house?: HouseWhereUniqueInput | null;
  renter?: RenterWhereUniqueInput | null;
  startDate?: Date | null;
  totalPrice?: number | null;
};
