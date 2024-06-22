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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { RentalUpdateManyWithoutRentersInput } from "./RentalUpdateManyWithoutRentersInput";
import { Type } from "class-transformer";

@InputType()
class RenterUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phoneNumber?: string | null;

  @ApiProperty({
    required: false,
    type: () => RentalUpdateManyWithoutRentersInput,
  })
  @ValidateNested()
  @Type(() => RentalUpdateManyWithoutRentersInput)
  @IsOptional()
  @Field(() => RentalUpdateManyWithoutRentersInput, {
    nullable: true,
  })
  rentals?: RentalUpdateManyWithoutRentersInput;
}

export { RenterUpdateInput as RenterUpdateInput };
