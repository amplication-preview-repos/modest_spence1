import { SortOrder } from "../../util/SortOrder";

export type RentalOrderByInput = {
  createdAt?: SortOrder;
  endDate?: SortOrder;
  houseId?: SortOrder;
  id?: SortOrder;
  renterId?: SortOrder;
  startDate?: SortOrder;
  totalPrice?: SortOrder;
  updatedAt?: SortOrder;
};
