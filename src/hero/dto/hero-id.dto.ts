import {ApiProperty} from '@nestjs/swagger';
import {IsNotEmpty, IsString, MaxLength, MinLength} from 'class-validator';

export class heroIdDto {
  @ApiProperty({
    example: '1234567890abcdef12345678',
    description: 'MongoDB ObjectId',
    format: 'string',
    required: true,
    minLength: 24,
    maxLength: 24,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(24)
  @MaxLength(24)
  readonly _id: string;
}
