import { Component, OnInit } from '@angular/core';
import { DemoMatchSimulatorService } from '../services/demo.match.simulator.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  constructor(private matchSimualtor: DemoMatchSimulatorService) { }

  ngOnInit(): void {
  }

  simulate(): void {
    this.matchSimualtor.simulate()
  }

}
