import { Team } from '../../../entities/team';
export interface Simulation {
    simulate(teams: Team[]): void
}