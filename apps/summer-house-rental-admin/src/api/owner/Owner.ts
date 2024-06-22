import { House } from "../house/House";

export type Owner = {
  createdAt: Date;
  email: string | null;
  houses?: Array<House>;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  updatedAt: Date;
};
