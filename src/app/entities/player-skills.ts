import { Skills } from './skills';
export class PlayerSkills implements Skills {
    talent: number;
    currentShape: number;

    constructor(talent: number, currentShape: number) {
        this.talent = talent;
        this.currentShape = currentShape;
    }

}