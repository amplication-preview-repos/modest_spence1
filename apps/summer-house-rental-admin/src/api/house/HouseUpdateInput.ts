import { OwnerWhereUniqueInput } from "../owner/OwnerWhereUniqueInput";
import { RentalUpdateManyWithoutHousesInput } from "./RentalUpdateManyWithoutHousesInput";

export type HouseUpdateInput = {
  address?: string | null;
  description?: string | null;
  owner?: OwnerWhereUniqueInput | null;
  pricePerNight?: number | null;
  rentals?: RentalUpdateManyWithoutHousesInput;
};
