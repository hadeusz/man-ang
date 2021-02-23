import { Position } from "./position";
import { Skills } from "./skills";

export interface Player {
    name: string;
    surname: string;
    bornDate: Date;
    position: Position;
    skills: Skills;
}