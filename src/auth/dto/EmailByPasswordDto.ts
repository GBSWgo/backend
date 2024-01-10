import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class EmailByPasswordDto {
  @IsString()
  @ApiProperty()
  public readonly email: string

  @IsString()
  @ApiProperty()
  public readonly password: string
}