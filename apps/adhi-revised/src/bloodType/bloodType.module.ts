import { Module } from "@nestjs/common";
import { BloodTypeModuleBase } from "./base/bloodType.module.base";
import { BloodTypeService } from "./bloodType.service";
import { BloodTypeResolver } from "./bloodType.resolver";

@Module({
  imports: [BloodTypeModuleBase],
  providers: [BloodTypeService, BloodTypeResolver],
  exports: [BloodTypeService],
})
export class BloodTypeModule {}
