import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BloodTypeServiceBase } from "./base/bloodType.service.base";

@Injectable()
export class BloodTypeService extends BloodTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
