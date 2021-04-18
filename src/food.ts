import { macroT, locationT, printable, identifiable } from './helpers';

export abstract class Food implements printable, identifiable {
    constructor(private name:string, 
                private origin:locationT, 
                private macros:macroT, 
                private weight:number,
                private kcal100gr:number, 
                private priceKg:number){}
            
    getName():string { return this.name; }
    getOrigin():locationT { return this.origin; }
    getMacros():macroT { return this.macros; }
    getWeight():number { return this.weight; }
    getKcal100gr():number { return this.kcal100gr; }
    getPriceKg():number { return this.priceKg; }
    getClassName():string { return this.constructor.name; }

    setName( name:string ) { this.name = name; }
    setOrigin( origin:locationT ) { this.origin = origin; }
    setMacros( macros: macroT ) { this.macros = macros; }
    setWeight( weight:number ) { this.weight = this.weight; }
    setKcal100gr( kcal100gr:number ) { this.kcal100gr = kcal100gr;}
    setPriceKg( priceKg:number ) { this.priceKg = priceKg; }
    calcPricePerWeigth(): number { return (this.getWeight() / 1000) * this.getPriceKg(); }
    calcKcal(): number { return (this.getWeight() * this.getKcal100gr()) / 100; }

    print() {
        return '--Class:' + this.getClassName() +
        '\n--Name:' + this.getName() +
        '\n--Origin:' + this.getOrigin() +
        '\n--Macro--' + 
        '\n--Carbohydrates:' + this.getMacros().carbohydrates +
        '\n--Lipids:' + this.getMacros().lipids +
        '\n--Protein:' + this.getMacros().protein +
        '\n--Kcal per 100gr:' + this.getKcal100gr() +
        '\n--Price per Kg:' + this.getPriceKg();
    }
}

