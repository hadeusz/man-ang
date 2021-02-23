import { TestBed } from '@angular/core/testing';
import { DemoMatchSimulatorService } from './demo.match.simulator.service';


xdescribe('DemoMatchSimulatorService', () => {
  let service: DemoMatchSimulatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoMatchSimulatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});