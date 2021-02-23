import { Team } from "src/app/entities/team";

export interface DynamicMatchFactors {
    team: Team;
    ballPossession: number;
    teamFactor: number;
}