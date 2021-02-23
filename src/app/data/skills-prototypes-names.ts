import { PlayerSkills } from '../entities/player-skills';

export class SkillsPrototypesNames {
    public static WEEK_0 = new PlayerSkills(1, 1)
    public static WEEK_1 = new PlayerSkills(1, 2)
    public static WEEK_2 = new PlayerSkills(1, 3)
    public static MIDDLE_0 = new PlayerSkills(2, 1);
    public static MIDDLE_1 = new PlayerSkills(2, 2);
    public static MIDDLE_2 = new PlayerSkills(2, 3);
    public static GOOD_0 = new PlayerSkills(3, 1);
    public static GOOD_1 = new PlayerSkills(3, 2);
    public static GOOD_2 = new PlayerSkills(3, 3);
}