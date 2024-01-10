import { ApiProperty } from "@nestjs/swagger"
import { IsInt, IsOptional } from "class-validator"

export class UpdateUserDto {
  @IsInt()
  @IsOptional()
  @ApiProperty()
  public readonly chat: number

  @IsInt()
  @IsOptional()
  @ApiProperty()
  public readonly edit: number

  @IsInt()
  @IsOptional()
  @ApiProperty()
  public readonly eye: number
}