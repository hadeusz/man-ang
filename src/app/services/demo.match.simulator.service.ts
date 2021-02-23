import { Injectable } from '@angular/core';
import { DemoMatchDataSevice } from '../data/demo.match.data.service';

@Injectable({
  providedIn: 'root'
})
export class DemoMatchSimulatorService {

  private static MATCH_DURATION_IN_SEC = 10

  constructor(private demoData: DemoMatchDataSevice) { }

  async simulate(): Promise<any> {
    let teams;

    await this.demoData.getTeams().subscribe(async teamsData => {
      teams = teamsData;
    })

    let duration = 0

    for (let duration = 0; duration < DemoMatchSimulatorService.MATCH_DURATION_IN_SEC; duration++) {
      console.log(teams);

      await this.nextStep();
    }



    console.log(teams);

    console.log(teams);
    await this.nextStep();
    console.log(teams);
  }

  async nextStep() {

    await this.delay(1000);

  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
