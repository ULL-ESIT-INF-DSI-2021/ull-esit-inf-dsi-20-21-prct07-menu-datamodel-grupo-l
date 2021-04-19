import { Food } from '../food';
import { macroT, locationT } from '../helpers';

/**
 * @description Clase de Frutas
 */
export class Fruits extends Food {
    constructor(name: string, origin:locationT, macros:macroT,
        weight: number, Kcal100gr:number, priceKg:number) {
        super(name, origin, macros, weight, Kcal100gr, priceKg);
    }
}