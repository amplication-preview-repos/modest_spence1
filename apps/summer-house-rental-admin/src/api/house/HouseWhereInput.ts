import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OwnerWhereUniqueInput } from "../owner/OwnerWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { RentalListRelationFilter } from "../rental/RentalListRelationFilter";

export type HouseWhereInput = {
  address?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  owner?: OwnerWhereUniqueInput;
  pricePerNight?: FloatNullableFilter;
  rentals?: RentalListRelationFilter;
};
