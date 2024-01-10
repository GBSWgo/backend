import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString, Length, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
  @Length(3, 50)
  @IsString()
  @ApiProperty()
  public readonly email: string

  @Length(3, 20)
  @IsString()
  @ApiProperty()
  public readonly login: string

  @MinLength(8)
  @IsString()
  @ApiProperty()
  public readonly password: string
}