import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HouseListRelationFilter } from "../house/HouseListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type OwnerWhereInput = {
  email?: StringNullableFilter;
  houses?: HouseListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
};
