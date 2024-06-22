import { Rental } from "../rental/Rental";

export type Renter = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  rentals?: Array<Rental>;
  updatedAt: Date;
};
