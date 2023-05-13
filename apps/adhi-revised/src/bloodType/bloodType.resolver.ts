import * as graphql from "@nestjs/graphql";
import { BloodTypeResolverBase } from "./base/bloodType.resolver.base";
import { BloodType } from "./base/BloodType";
import { BloodTypeService } from "./bloodType.service";

@graphql.Resolver(() => BloodType)
export class BloodTypeResolver extends BloodTypeResolverBase {
  constructor(protected readonly service: BloodTypeService) {
    super(service);
  }
}
