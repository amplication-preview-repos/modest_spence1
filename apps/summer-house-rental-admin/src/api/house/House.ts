import { Owner } from "../owner/Owner";
import { Rental } from "../rental/Rental";

export type House = {
  address: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  owner?: Owner | null;
  pricePerNight: number | null;
  rentals?: Array<Rental>;
  updatedAt: Date;
};
