import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsString } from "class-validator";
import { Type } from "class-transformer";

export class CreateStringWithDateDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: "string",
    description: "Any text from user",
    example: "Hello",
  })
  text: string;

  @Type(() => Date)
  @IsDate()
  @ApiProperty({
    type: "timestamp",
    description: "Datetime from user",
  })
  createdAt: Date;
}
