import { House } from "../house/House";
import { Renter } from "../renter/Renter";

export type Rental = {
  createdAt: Date;
  endDate: Date | null;
  house?: House | null;
  id: string;
  renter?: Renter | null;
  startDate: Date | null;
  totalPrice: number | null;
  updatedAt: Date;
};
