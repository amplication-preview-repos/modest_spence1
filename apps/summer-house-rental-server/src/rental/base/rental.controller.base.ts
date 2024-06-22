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
import { RentalService } from "../rental.service";
import { RentalCreateInput } from "./RentalCreateInput";
import { Rental } from "./Rental";
import { RentalFindManyArgs } from "./RentalFindManyArgs";
import { RentalWhereUniqueInput } from "./RentalWhereUniqueInput";
import { RentalUpdateInput } from "./RentalUpdateInput";

export class RentalControllerBase {
  constructor(protected readonly service: RentalService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Rental })
  async createRental(@common.Body() data: RentalCreateInput): Promise<Rental> {
    return await this.service.createRental({
      data: {
        ...data,

        house: data.house
          ? {
              connect: data.house,
            }
          : undefined,

        renter: data.renter
          ? {
              connect: data.renter,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        endDate: true,

        house: {
          select: {
            id: true,
          },
        },

        id: true,

        renter: {
          select: {
            id: true,
          },
        },

        startDate: true,
        totalPrice: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Rental] })
  @ApiNestedQuery(RentalFindManyArgs)
  async rentals(@common.Req() request: Request): Promise<Rental[]> {
    const args = plainToClass(RentalFindManyArgs, request.query);
    return this.service.rentals({
      ...args,
      select: {
        createdAt: true,
        endDate: true,

        house: {
          select: {
            id: true,
          },
        },

        id: true,

        renter: {
          select: {
            id: true,
          },
        },

        startDate: true,
        totalPrice: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Rental })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async rental(
    @common.Param() params: RentalWhereUniqueInput
  ): Promise<Rental | null> {
    const result = await this.service.rental({
      where: params,
      select: {
        createdAt: true,
        endDate: true,

        house: {
          select: {
            id: true,
          },
        },

        id: true,

        renter: {
          select: {
            id: true,
          },
        },

        startDate: true,
        totalPrice: true,
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
  @swagger.ApiOkResponse({ type: Rental })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateRental(
    @common.Param() params: RentalWhereUniqueInput,
    @common.Body() data: RentalUpdateInput
  ): Promise<Rental | null> {
    try {
      return await this.service.updateRental({
        where: params,
        data: {
          ...data,

          house: data.house
            ? {
                connect: data.house,
              }
            : undefined,

          renter: data.renter
            ? {
                connect: data.renter,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          endDate: true,

          house: {
            select: {
              id: true,
            },
          },

          id: true,

          renter: {
            select: {
              id: true,
            },
          },

          startDate: true,
          totalPrice: true,
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
  @swagger.ApiOkResponse({ type: Rental })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteRental(
    @common.Param() params: RentalWhereUniqueInput
  ): Promise<Rental | null> {
    try {
      return await this.service.deleteRental({
        where: params,
        select: {
          createdAt: true,
          endDate: true,

          house: {
            select: {
              id: true,
            },
          },

          id: true,

          renter: {
            select: {
              id: true,
            },
          },

          startDate: true,
          totalPrice: true,
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
