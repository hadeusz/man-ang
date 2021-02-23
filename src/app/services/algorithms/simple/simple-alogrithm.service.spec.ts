import { TeamsData } from './../../tests/fake-tests-data';
import { TestBed } from '@angular/core/testing';
import { RandomizationUtils } from '../common/randomization-utils.service';

import { SimpleAlogrithmService } from './simple-alogrithm.service';

describe('SimpleAlogrithmService', () => {
  let service: SimpleAlogrithmService;
  let randomizedServiceSpy: jasmine.SpyObj<RandomizationUtils>

  beforeEach(() => {
    const spy = jasmine.createSpyObj('RandomizationUtils', ['numberBetween1And100']);

    TestBed.configureTestingModule({
      // Provide both the service-to-test and its (spy) dependency
      providers: [
        SimpleAlogrithmService,
        { provide: RandomizationUtils, useValue: spy }
      ]
    });

    service = TestBed.inject(SimpleAlogrithmService);
    randomizedServiceSpy = TestBed.inject(RandomizationUtils) as jasmine.SpyObj<RandomizationUtils>;
  });

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(SimpleAlogrithmService);
  // });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  it('#getValue should return real value from the real service', () => {

    const team1Value = 4;
    randomizedServiceSpy.numberBetween1And100.and.returnValue(team1Value);

    const teams = TeamsData.getTeams()

    const action = service.simulate(teams)
    expect(action.attackingTeam.name).toBe("TEAM1");
  });

  // it('#getValue should return real value from the real service', () => {
  //   service = new SimpleAlogrithmService(new RandomizationUtils());

  //   const teams = TeamsData.getTeams()

  //   const action = service.simulate(teams)
  //   expect(action.attackingTeam.name).toBe("TEAM2");
  // });
});
