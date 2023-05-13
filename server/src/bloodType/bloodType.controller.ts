import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BloodTypeService } from "./bloodType.service";
import { BloodTypeControllerBase } from "./base/bloodType.controller.base";

@swagger.ApiTags("bloodTypes")
@common.Controller("bloodTypes")
export class BloodTypeController extends BloodTypeControllerBase {
  constructor(protected readonly service: BloodTypeService) {
    super(service);
  }
}
