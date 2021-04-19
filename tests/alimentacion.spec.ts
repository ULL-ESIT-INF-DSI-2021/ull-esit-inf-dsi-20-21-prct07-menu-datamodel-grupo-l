/* eslint-disable camelcase */
/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {Fruits} from "../src/Foods/fruits";
import {Vegetable} from "../src/Foods/vegetable";
import {Seed} from "../src/Foods/seed";
import {Fish} from "../src/Foods/fish";
import {Legume} from "../src/Foods/legume";
import {Meat} from "../src/Foods/meat";
import {Product} from "../src/Foods/products";

/*(alias) new Fruits(name: string, origin: locationT, 
macros: macroT, weight: number, Kcal100gr: number, priceKg: number): Fruits
import Fruits*/

describe(`Practica07_Prueba_Comidas:`, () => {
    const apple = new Fruits('apple', { country: 'Spain', city: 'Granada' },  { carbohydrates: 12, lipids: 0.17, protein: 0.3 }, 50, 53, 1.65);
    const manchego = new Product ('manchego', { country: 'Spain', city: 'La Mancha' }, { carbohydrates: 0.42, lipids: 33.54, protein: 26.01 }, 50, 408, 34.90);
    const heavyCream = new Product ('heavyCream', { country: 'Spain', city: 'La Victoria' }, { carbohydrates: 2, lipids: 48.2, protein: 1.5 }, 25, 448, 2);
    const onion = new Vegetable('onion', { country: 'Spain', city: 'La Victoria' }, { carbohydrates: 7, lipids: 0, protein: 1.2 }, 50, 33, 1);
    const beefChop = new Meat('beef chop',{ country: 'Spain', city: 'La Victoria' },{ carbohydrates: 0, lipids: 20.5, protein: 17 }, 50, 253, 6);
    const bonito = new Fish('bonito',{ country: 'Spain', city: 'La Victoria' },{ carbohydrates: 0, lipids: 6, protein: 21 }, 50, 138, 12);
    const nuts = new Seed('nuts',{ country: 'Spain', city: 'La Victoria' },{ carbohydrates: 3.3, lipids: 59, protein: 14 }, 50, 611, 13);
    const pea = new Legume('pea',{ country: 'Spain', city: 'La Victoria' },{ carbohydrates: 13.1, lipids: 0.5, protein: 6 }, 50, 91, 5);

  it('EL nombre de onion es onion', () => {
    expect(onion).to.ownProperty("name");
  });

  it('El origen de manchego es España(Spain) y la ciudad es La Mancha', () => {
    expect(manchego.getOrigin().country).to.equal("Spain");
    expect(manchego.getOrigin().city).to.equal("La Mancha");
  });

  it('El liquido que hay en heavyCream es 48.2', () => {
    expect(heavyCream.getMacros().lipids).to.equal(48.2);
  });

  it('La proteina que hay en beefChop es 17', () => {
    expect(beefChop.getMacros().protein).to.equal(17);
  });

  it('El origen de bonito es España(Spain) y la ciudad es La Victoria', () => {
    expect(bonito.getOrigin().country).to.equal("Spain");
    expect(bonito.getOrigin().city).to.equal("La Victoria");
  });

  it('El precio de frutos secos es es 13', () => {
    expect(nuts.getPriceKg()).to.be.equal(13);
  });

  it('El precio de manzanas por kilogramo es 1.65', () => {
    expect(apple.getPriceKg()).to.be.equal(1.65);
  });

  it('Peso sobre guisante es 50', () => {
    expect(pea.getWeight()).to.be.equal(50);
    });
});