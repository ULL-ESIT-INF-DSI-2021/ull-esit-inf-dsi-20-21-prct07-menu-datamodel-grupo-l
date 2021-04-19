
/**
 * Location for every food
 */
export type locationT = {
    country:string,
    city:string;
}

export type macroT = {
    protein:number,
    carbohydrates:number,
    lipids:number;
}

export interface printable {
    print():void;
}

export interface identifiable {
    getClassName():string;
}


/**
 * @description:
 * entree = comidas entradas
 * frist = primer plato
 * second = segundo plato
 * dessert = postres
 */
export type plateCategory = 'entree' | 'first' | 'second' | 'dessert';

export enum AllOptions {
    Show = 'Show the cart',
    Command = 'New command',
    Quit = 'Exit',
}

export enum OptCarte {
    ShowMenu = 'Show menus',
    ShowPlate = 'Show plates',
    Quit = 'Exit',
}

export enum CreateCommand {
    ChooseMenu = 'Menus',
    ChoosePlate= 'Plates',
    Create = 'Create new menu',
    Quit = 'Exit',
}

export enum CreateCustom {
    IndividualPlate = 'Individual Plates',
    ModificationMenu = 'To do a modification of a menu',
    Quit = 'Exit',
}

export enum OptMenu {
    Add = 'Add a new plate',
    Remove = 'Remove a plate',
    Quit = 'Exit',
}