import { OwnerWhereUniqueInput } from "../owner/OwnerWhereUniqueInput";
import { RentalCreateNestedManyWithoutHousesInput } from "./RentalCreateNestedManyWithoutHousesInput";

export type HouseCreateInput = {
  address?: string | null;
  description?: string | null;
  owner?: OwnerWhereUniqueInput | null;
  pricePerNight?: number | null;
  rentals?: RentalCreateNestedManyWithoutHousesInput;
};
