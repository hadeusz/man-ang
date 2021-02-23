import { MatchAction } from './../common/match-action';

import { Injectable } from '@angular/core';
import { Team } from 'src/app/entities/team';

import { AlgorithmUtils } from 'src/app/utils/algorithm-utils';
import { DynamicMatchFactors } from '../common/dynamic-match-factors';
import { Simulation } from '../common/match-simulation';
import { RandomizationUtils } from '../common/randomization-utils.service';

@Injectable({
  providedIn: 'root'
})
export class SimpleAlogrithmService implements Simulation {

  constructor(private ranodmizationUtils: RandomizationUtils) { }

  public simulate(teams: Team[]): MatchAction {
    const dynamicFactors = this.prepareDynamicMatchFactors(teams)
    const attackingTeam = this.findTeamWhoPossessBall(dynamicFactors)

    console.log("tm", dynamicFactors[0].team.name, " bp", dynamicFactors[0].ballPossession)
    console.log("tm", dynamicFactors[1].team.name, " bp", dynamicFactors[1].ballPossession)
    return { attackingTeam };
  }

  findTeamWhoPossessBall(dynamicFactors: DynamicMatchFactors[]): Team {
    const randomNum = this.ranodmizationUtils.numberBetween1And100();

    const teams1PossesBall = randomNum <= dynamicFactors[0].ballPossession
    return teams1PossesBall ? dynamicFactors[0].team : dynamicFactors[1].team
  }

  prepareDynamicMatchFactors(teams: Team[]): DynamicMatchFactors[] {

    const team1Factor = teams[0].calculateTeamFactor()
    const team2Factor = teams[1].calculateTeamFactor()
    const commonFactor = team1Factor + team2Factor

    const factors: DynamicMatchFactors[] = [
      { team: teams[0], ballPossession: ballPossession(team1Factor, commonFactor), teamFactor: team1Factor },
      { team: teams[1], ballPossession: ballPossession(team2Factor, commonFactor), teamFactor: team2Factor }
    ]

    return factors

    function ballPossession(factor: number, commonFactor: number): number {
      const teamPossession = 25;
      return teamPossession + Math.round(factor / commonFactor)
    }

  }

}
