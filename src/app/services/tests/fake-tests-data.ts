import { SkillsPrototypesNames as SkillsPrototypes } from "src/app/data/skills-prototypes-names";
import { Player } from "src/app/entities/player";
import { Position } from "src/app/entities/position";
import { Team } from "src/app/entities/team";

export class TeamsData {

    static TEAM1_PLAYERS: Player[] = [
        { name: 'Asta', surname: 'Clos', bornDate: null, position: Position.GOALKEEPER, skills: SkillsPrototypes.WEEK_0 },
        { name: 'Michael', surname: 'Brun', bornDate: null, position: Position.DEFENSIVE, skills: SkillsPrototypes.WEEK_1 },
        { name: 'Bayo', surname: 'Gombka', bornDate: null, position: Position.DEFENSIVE, skills: SkillsPrototypes.WEEK_0 },
        { name: 'Ziu', surname: 'Gloswerk', bornDate: null, position: Position.DEFENSIVE, skills: SkillsPrototypes.WEEK_1 },
        { name: 'Budo', surname: 'Clos', bornDate: null, position: Position.DEFENSIVE, skills: SkillsPrototypes.WEEK_2 },
        { name: 'Cytro', surname: 'Zajwauskas', bornDate: null, position: Position.MIDFIELDER, skills: SkillsPrototypes.WEEK_1 },
        { name: 'Bodo', surname: 'Mainor', bornDate: null, position: Position.MIDFIELDER, skills: SkillsPrototypes.MIDDLE_1 },
        { name: 'Michael', surname: 'Douber', bornDate: null, position: Position.MIDFIELDER, skills: SkillsPrototypes.WEEK_1 },
        { name: 'Adam', surname: 'Kowalski', bornDate: null, position: Position.MIDFIELDER, skills: SkillsPrototypes.WEEK_1 },
        { name: 'Claun', surname: 'Rajunda', bornDate: null, position: Position.ATTACK, skills: SkillsPrototypes.WEEK_1 },
        { name: 'Borys', surname: 'Daucha', bornDate: null, position: Position.ATTACK, skills: SkillsPrototypes.WEEK_2 },
    ];

    static TEAM2_PLAYERS: Player[] = [
        { name: 'Glu', surname: 'Wun', bornDate: null, position: Position.GOALKEEPER, skills: SkillsPrototypes.WEEK_0 },
        { name: 'Hiob', surname: 'Balu', bornDate: null, position: Position.DEFENSIVE, skills: SkillsPrototypes.MIDDLE_1 },
        { name: 'Adam', surname: 'Jarnczewski', bornDate: null, position: Position.DEFENSIVE, skills: SkillsPrototypes.MIDDLE_2 },
        { name: 'Thomas', surname: 'Budweiser', bornDate: null, position: Position.DEFENSIVE, skills: SkillsPrototypes.MIDDLE_2 },
        { name: 'Lipo', surname: 'Lipauskas', bornDate: null, position: Position.MIDFIELDER, skills: SkillsPrototypes.GOOD_1 },
        { name: 'Kanto', surname: 'Lipauskas', bornDate: null, position: Position.MIDFIELDER, skills: SkillsPrototypes.GOOD_2 },
        { name: 'Danielo', surname: 'Plomersk', bornDate: null, position: Position.MIDFIELDER, skills: SkillsPrototypes.MIDDLE_2 },
        { name: 'Anstand', surname: 'Sand', bornDate: null, position: Position.MIDFIELDER, skills: SkillsPrototypes.MIDDLE_2 },
        { name: 'Ebbe', surname: 'Wolkstein', bornDate: null, position: Position.MIDFIELDER, skills: SkillsPrototypes.GOOD_0 },
        { name: 'Aldo', surname: 'Apache', bornDate: null, position: Position.ATTACK, skills: SkillsPrototypes.MIDDLE_2 },
        { name: 'Petter', surname: 'Kauso', bornDate: null, position: Position.ATTACK, skills: SkillsPrototypes.MIDDLE_1 },
    ];

    public static getTeams(): Team[] {
        return [new Team(1, "TEAM1", TeamsData.TEAM1_PLAYERS), new Team(2, "TEAM2", TeamsData.TEAM2_PLAYERS)]
    }

}