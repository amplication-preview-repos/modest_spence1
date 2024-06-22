import * as graphql from "@nestjs/graphql";
import { RenterResolverBase } from "./base/renter.resolver.base";
import { Renter } from "./base/Renter";
import { RenterService } from "./renter.service";

@graphql.Resolver(() => Renter)
export class RenterResolver extends RenterResolverBase {
  constructor(protected readonly service: RenterService) {
    super(service);
  }
}
