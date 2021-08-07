import { ApiProperty } from '@nestjs/swagger';

export class createUserDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  phone: string;
}
