import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'link'
})
export class Link {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({ example: 'd3ba19d5-0a69-4186-8355-e365db736585', description: 'The campaign id' })
    id: string;

    @Column({
        nullable: false
    })
    @ApiProperty({ example: 'http://google.com', description: 'The campaign link' })
    link: string;

    @Column({
        name: 'is_active',
        default: true,
    })
    @ApiProperty({ example: 'true', description: 'The campaign link status' })
    isActive: boolean;

    @Column({
        name: 'created_at',
        type: 'datetime',
        default: new Date().getTime()
    })
    @ApiProperty({ example: '1669563140077', description: 'The campaign created at datetime' })
    createdAt: string;
}
