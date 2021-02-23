import { Injectable } from '@angular/core';
import { AlgorithmUtils } from 'src/app/utils/algorithm-utils';

@Injectable({
  providedIn: 'root'
})
export class RandomizationUtils {

  public numberBetween1And100(): number {
    return AlgorithmUtils.getRandomInt(1, 100);
  }

}
