/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { BloodTypeService } from "../bloodType.service";
import { BloodTypeCreateInput } from "./BloodTypeCreateInput";
import { BloodTypeWhereInput } from "./BloodTypeWhereInput";
import { BloodTypeWhereUniqueInput } from "./BloodTypeWhereUniqueInput";
import { BloodTypeFindManyArgs } from "./BloodTypeFindManyArgs";
import { BloodTypeUpdateInput } from "./BloodTypeUpdateInput";
import { BloodType } from "./BloodType";

export class BloodTypeControllerBase {
  constructor(protected readonly service: BloodTypeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: BloodType })
  async create(@common.Body() data: BloodTypeCreateInput): Promise<BloodType> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [BloodType] })
  @ApiNestedQuery(BloodTypeFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<BloodType[]> {
    const args = plainToClass(BloodTypeFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: BloodType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: BloodTypeWhereUniqueInput
  ): Promise<BloodType | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: BloodType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: BloodTypeWhereUniqueInput,
    @common.Body() data: BloodTypeUpdateInput
  ): Promise<BloodType | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: BloodType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: BloodTypeWhereUniqueInput
  ): Promise<BloodType | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
