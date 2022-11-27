import { ApiProperty } from '@nestjs/swagger';

export class CreateLinkDto {
    @ApiProperty()
    link: string;
}
