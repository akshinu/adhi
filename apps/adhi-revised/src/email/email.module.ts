import { Module } from "@nestjs/common";
import { EmailModuleBase } from "./base/email.module.base";
import { EmailService } from "./email.service";
import { EmailResolver } from "./email.resolver";

@Module({
  imports: [EmailModuleBase],
  providers: [EmailService, EmailResolver],
  exports: [EmailService],
})
export class EmailModule {}
