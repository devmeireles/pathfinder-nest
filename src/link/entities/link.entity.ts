import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: 'link'
})
export class Link {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        nullable: false
    })
    link: string;

    @Column({
        name: 'is_active',
        default: true,
    })
    isActive: boolean;

    @Column({
        name: 'created_at',
        type: 'datetime',
        default: new Date().getTime()
    })
    createdAt: string;
}
