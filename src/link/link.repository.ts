import { Link } from "./entities/link.entity"

export interface LinkRepository{
    save(link: Link): Promise<Link>
    findAll(): Promise<Link[]>
}