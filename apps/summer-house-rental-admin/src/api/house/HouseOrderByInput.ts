import { SortOrder } from "../../util/SortOrder";

export type HouseOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  ownerId?: SortOrder;
  pricePerNight?: SortOrder;
  updatedAt?: SortOrder;
};
