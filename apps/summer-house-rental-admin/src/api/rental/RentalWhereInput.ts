import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { HouseWhereUniqueInput } from "../house/HouseWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { RenterWhereUniqueInput } from "../renter/RenterWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type RentalWhereInput = {
  endDate?: DateTimeNullableFilter;
  house?: HouseWhereUniqueInput;
  id?: StringFilter;
  renter?: RenterWhereUniqueInput;
  startDate?: DateTimeNullableFilter;
  totalPrice?: FloatNullableFilter;
};
