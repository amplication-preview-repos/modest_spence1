import { RenterWhereInput } from "./RenterWhereInput";
import { RenterOrderByInput } from "./RenterOrderByInput";

export type RenterFindManyArgs = {
  where?: RenterWhereInput;
  orderBy?: Array<RenterOrderByInput>;
  skip?: number;
  take?: number;
};
