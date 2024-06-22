/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  ValidateNested,
  IsNumber,
} from "class-validator";
import { OwnerWhereUniqueInput } from "../../owner/base/OwnerWhereUniqueInput";
import { Type } from "class-transformer";
import { RentalUpdateManyWithoutHousesInput } from "./RentalUpdateManyWithoutHousesInput";

@InputType()
class HouseUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => OwnerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OwnerWhereUniqueInput)
  @IsOptional()
  @Field(() => OwnerWhereUniqueInput, {
    nullable: true,
  })
  owner?: OwnerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  pricePerNight?: number | null;

  @ApiProperty({
    required: false,
    type: () => RentalUpdateManyWithoutHousesInput,
  })
  @ValidateNested()
  @Type(() => RentalUpdateManyWithoutHousesInput)
  @IsOptional()
  @Field(() => RentalUpdateManyWithoutHousesInput, {
    nullable: true,
  })
  rentals?: RentalUpdateManyWithoutHousesInput;
}

export { HouseUpdateInput as HouseUpdateInput };
