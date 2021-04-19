import { Food } from '../food';
import { macroT, locationT } from '../helpers';

/**
 * @description Class that product
 */
export class Product extends Food {
  /**
   * @description
   * @param name Consists of a string
   * @param origin Consists of a locationType
   * @param macros Consists of a macroType
   * @param weight Consists of a number
   * @param kcalPer100gr Consists of a number
   * @param pricePerKg Consists of a number
   */
    constructor(name: string, origin: locationT, macros: macroT,
        weight: number, kcalPer100gr: number, pricePerKg: number) {
    super(name, origin, macros, weight, kcalPer100gr, pricePerKg);
  }
}