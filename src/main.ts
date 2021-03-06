import { Fruits } from './Foods/fruits';
import { Vegetable } from './Foods/vegetable';
import { Meat } from './Foods/meat';
import { Plate } from './plate';
import { Menu } from './menu';
import { Carte } from './carte';
import { Seed } from './Foods/seed';
import { Fish } from './Foods/fish';
import { Eggs } from './Foods/eggs';
import { Legume } from './Foods/legume';
import { Product } from './Foods/products'

export const apple = new Fruits('apple', { country: 'Spain', city: 'Granada' },  { carbohydrates: 12, lipids: 0.17, protein: 0.3 }, 50, 53, 1.65);
export const banana = new Fruits('banana', { country: 'Spain', city: 'La Victoria' }, { carbohydrates: 22.84, lipids: 0.33, protein: 1.09 }, 50, 89, 2.05);
export const avocado = new Fruits('avocado',{ country: 'Spain', city: 'La Victoria' },{ carbohydrates: 5.9, lipids: 12, protein: 1.5 }, 50, 141, 8);
export const strawberry = new Fruits('strawberry', { country: 'Spain', city: 'La Victoria' }, { carbohydrates: 7, lipids: 0.5, protein: 0.7 }, 25, 40, 6);
export const lemon = new Fruits('lemon', { country: 'Spain', city: 'La Victoria' }, { carbohydrates: 9, lipids: 0.4, protein: 0.7 }, 25, 44, 6);
export const manchego = new Product('manchego', { country: 'Spain', city: 'La Mancha' }, { carbohydrates: 0.42, lipids: 33.54, protein: 26.01 }, 50, 408, 34.90);
export const iceCream = new Product('ice cream', { country: 'Spain', city: 'La Victoria' }, { carbohydrates: 28.2, lipids: 11, protein: 3.8 }, 50, 216, 11.80);
export const kefir = new Product('kefir', { country: 'Spain', city: 'La Victoria' }, { carbohydrates: 4.8, lipids: 3.5, protein: 3.3 }, 50, 64, 1);
export const heavyCream = new Product('heavyCream', { country: 'Spain', city: 'La Victoria' }, { carbohydrates: 2, lipids: 48.2, protein: 1.5 }, 25, 448, 2);
export const brie = new Product('brie', { country: 'Spain', city: 'La Victoria' },{ carbohydrates: 0.1, lipids: 26.9, protein: 19.3 }, 25, 320, 8);
export const spinach = new Vegetable('spinach', { country: 'Spain', city: 'La Victoria' }, { carbohydrates: 3.63, lipids: 0.39, protein: 2.89 }, 50, 23, 1.19);
export const arugula = new Vegetable('arugula', { country: 'Spain', city: 'La Victoria' }, { carbohydrates: 3.65, lipids: 0.66, protein: 2.58 }, 50, 25, 1.49);
export const asparagus = new Vegetable('asparagus', { country: 'Spain', city: 'La Victoria' }, { carbohydrates: 3.88, lipids: 0.12, protein: 2.2 }, 50, 20, 8.60);
export const garlic = new Vegetable('garlic', { country: 'Spain', city: 'La Victoria' }, { carbohydrates: 23, lipids: 0.3, protein: 5.3 }, 50, 118, 2);
export const onion = new Vegetable('onion', { country: 'Spain', city: 'La Victoria' }, { carbohydrates: 7, lipids: 0, protein: 1.2 }, 50, 33, 1);
export const lettuce = new Vegetable('lettuce',{ country: 'Spain', city: 'La Victoria' },{ carbohydrates: 0.1, lipids: 0.2, protein: 1.34 }, 50, 14, 1.49);
export const broccoli = new Vegetable('broccoli',{ country: 'Spain', city: 'La Victoria' },{ carbohydrates: 1.8, lipids: 0.9, protein: 4.4 }, 50, 38, 1.49);
export const steak = new Meat('ribeye',{ country: 'Spain', city: 'La Victoria' },{ carbohydrates: 0, lipids: 8.95, protein: 19.62 }, 250, 165, 19.99);
export const bacon = new Meat('bacon',{ country: 'Spain', city: 'La Victoria' },{ carbohydrates: 0.5, lipids: 26.1, protein: 16 }, 50, 301, 6);
export const chicken = new Meat('chicken', { country: 'Spain', city: 'La Victoria' },{ carbohydrates: 0, lipids: 9.7, protein: 20 }, 50, 167, 6);
export const porkTenderloin = new Meat('pork tenderloin',{ country: 'Spain', city: 'La Victoria' },{ carbohydrates: 0, lipids: 5.1, protein: 21 }, 50, 130, 6);
export const beefChop = new Meat('beef chop',{ country: 'Spain', city: 'La Victoria' },{ carbohydrates: 0, lipids: 20.5, protein: 17 }, 50, 253, 6);
export const whiteRice = new Seed('white rice',{ country: 'Spain', city: 'La Victoria' },{ carbohydrates: 86, lipids: 0.9, protein: 7 }, 50, 381, 1);
export const brownRice = new Seed('brown rice',{ country: 'Spain', city: 'La Victoria' },{ carbohydrates: 73, lipids: 2.2, protein: 8 }, 50, 351, 1.5);
export const almond = new Seed('almond',{ country: 'Spain', city: 'La Victoria' },{ carbohydrates: 6.6, lipids: 56.7, protein: 21.2 }, 50, 648, 12);
export const nuts = new Seed('nuts',{ country: 'Spain', city: 'La Victoria' },{ carbohydrates: 3.3, lipids: 59, protein: 14 }, 50, 611, 13);
export const sesameSeeds = new Seed('sesame seeds',{ country: 'Spain', city: 'La Victoria' },{ carbohydrates: 0.9, lipids: 58, protein: 18.2 }, 50, 614, 8);
export const anchovies = new Fish('anchovies',{ country: 'Spain', city: 'La Victoria' },{ carbohydrates: 0, lipids: 6.3, protein: 17.6 }, 25, 127, 30);
export const tuna = new Fish('tuna',{ country: 'Spain', city: 'La Victoria' },{ carbohydrates: 0, lipids: 12, protein: 23 }, 50, 200, 1.5);
export const bonito = new Fish('bonito',{ country: 'Spain', city: 'La Victoria' },{ carbohydrates: 0, lipids: 6, protein: 21 }, 50, 138, 12);
export const caviar = new Fish('caviar',{ country: 'Spain', city: 'La Victoria' },{ carbohydrates: 4, lipids: 17.9, protein: 25 }, 50, 277, 50);
export const hake = new Fish('hake',{ country: 'Spain', city: 'La Victoria' },{ carbohydrates: 0, lipids: 2.8, protein: 15.9 }, 50, 89, 8);
export const eggWhite = new Eggs('egg white',{ country: 'Spain', city: 'La Victoria' },{ carbohydrates: 0.5, lipids: 0.2, protein: 11 }, 50, 48, 5);
export const chickenEgg = new Eggs('chicken egg',{ country: 'Spain', city: 'La Victoria' }, { carbohydrates: 0.7, lipids: 11.1, protein: 12.5 }, 50, 153, 3);
export const eggYolk = new Eggs('egg yolk',{ country: 'Spain', city: 'La Victoria' },{ carbohydrates: 0.2, lipids: 33, protein: 16 }, 50, 362, 3);
export const chickpea = new Legume('chickpea',{ country: 'Spain', city: 'La Victoria' },{ carbohydrates: 49.6, lipids: 5.4, protein: 21.3 }, 50, 332, 5);
export const pea = new Legume('pea',{ country: 'Spain', city: 'La Victoria' },{ carbohydrates: 13.1, lipids: 0.5, protein: 6 }, 50, 91, 5);
export const blackBeans = new Legume('black bean',{ country: 'Spain', city: 'La Victoria' },{ carbohydrates: 13.1, lipids: 0.5, protein: 24.9 }, 50, 275, 5);
export const lentil = new Legume('lentil',{ country: 'Spain', city: 'La Victoria' },{ carbohydrates: 48.8, lipids: 1.9, protein: 24.3 }, 50, 310, 5);
export const whiteBeans = new Legume('white beans',{ country: 'Spain', city: 'La Victoria' },{ carbohydrates: 49.7, lipids: 1.6, protein: 21.4 }, 50, 299, 5);
export const hummus = new Plate('hummus', [chickpea, lemon], 'entree');
export const meatNCheese = new Plate('meat and cheese tray', [steak, brie], 'entree');
export const spinachDip = new Plate('spinach dip', [spinach, heavyCream, eggYolk], 'entree');
export const riceCaviar = new Plate('rice and caviar', [whiteRice, caviar], 'entree');
export const brownRiceAnchovies = new Plate('brown rice and anchovies', [brownRice, anchovies], 'entree');
export const manchegoSalad = new Plate('manchego salad', [apple, manchego, spinach, arugula], 'first');
export const brieSalad = new Plate('brie salad', [apple, brie, spinach, arugula], 'first');
export const chickenSalad = new Plate('chicken salad', [apple, chicken, spinach, arugula], 'first');
export const baconSalad = new Plate('bacon salad', [apple, bacon, spinach, arugula], 'first');
export const steakNAsparagus =  new Plate('steak and roasted asparagus', [steak, asparagus], 'second');
export const hakeNRice =  new Plate('hake and rice', [hake, whiteRice, garlic], 'second');
export const porkTenderloinNBroccoli =  new Plate('pork tenderloin with broccoli',  [porkTenderloin, broccoli, garlic, onion], 'second');
export const beefChopNLettuce =  new Plate('beef chop with lettuce', [beefChop, lettuce, almond, pea], 'second');
export const lentilPlate =  new Plate('lentil soup', [lentil, chickenEgg, onion, garlic], 'second');
export const blackBeansPlate = new Plate('black beans soup', [blackBeans, chickenEgg, onion, garlic], 'second');
export const whiteBeansPlate = new Plate('white beans soup', [whiteBeans, chickenEgg, onion, garlic], 'second');
export const tunaBonitoTartar = new Plate('white beans soup', [tuna, bonito, sesameSeeds, avocado], 'second');
export const bananaSplit = new Plate('banana split',  [iceCream, banana], 'dessert');
export const kefirNNuts = new Plate('kefir and nuts',  [kefir, nuts], 'dessert');
export const strawberryIcecream = new Plate('strawberry and ice cream',  [strawberry, iceCream], 'dessert');
export const flan = new Plate('flan',  [eggWhite, lemon], 'dessert');
export const FruitsKefir = new Plate('Fruits kefir',  [kefir, strawberry, banana, lemon], 'dessert');


export const fishMenu = new Menu('Fish  Menu',  [brownRiceAnchovies, manchegoSalad, hakeNRice, bananaSplit]);
export const meatMenu = new Menu('Meat  Menu',  [steakNAsparagus, meatNCheese, baconSalad, kefirNNuts]);
export const chickenMenu = new Menu('Chicken  Menu',  [spinachDip, chickenSalad, blackBeansPlate, flan]);
export const veggieMenu = new Menu('Veggie  Menu',  [hummus, brieSalad, whiteBeansPlate, FruitsKefir]);
export const exclusiveMenu = new Menu('Exclusive Menu', [riceCaviar, brieSalad, tunaBonitoTartar, strawberryIcecream]);
export const carteInstance = new Carte([fishMenu, meatMenu, chickenMenu, veggieMenu, exclusiveMenu]);