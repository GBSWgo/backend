import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsDate, IsHexadecimal, IsInt, IsOptional, IsPositive, IsString, Length, MaxLength } from 'class-validator'
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({
  name: 'users'
})
export class User {
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    unsigned: true
  })
  @IsInt()
  @IsPositive()
  @ApiProperty()
  public readonly id: number

  @Column({
    unique: true
  })
  @Length(3, 50)
  @IsString()
  @ApiProperty()
  public readonly email: string

  @Column({
    unique: true
  })
  @Length(3, 20)
  @IsString()
  @ApiProperty()
  public readonly login: string

  @Column({
    select: false,
  })
  @IsString()
  @IsHexadecimal()
  @Length(128, 128)
  @ApiProperty()
  public readonly password: string

  @Column()
  @IsInt()
  @ApiProperty()
  public readonly chat: number

  @Column()
  @IsInt()
  @ApiProperty()
  public readonly edit: number

  @Column()
  @IsInt()
  @ApiProperty()
  public readonly eye: number

  @Column({
    select: false
  })
  @IsString()
  @Length(8, 8)
  @ApiProperty()
  public readonly salt: string

  @CreateDateColumn({
    name: 'createdat',
    type: 'timestamp'
  })
  @IsDate()
  @ApiProperty()
  public readonly createdAt: Date
}