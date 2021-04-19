
/**
 * @description Location for every food
 */
export type locationT = {
    country:string,
    city:string;
}

/**
 * @description Carbono, proteinas y lipidos de cada alimento
 */
export type macroT = {
    protein:number,
    carbohydrates:number,
    lipids:number;
}

/**
 * @description interfaz para imprimir
 */
export interface printable {
    print():void;
}

/**
 * @description interfaz para identificable
 */
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

/**
 * @description todas las opciones
 */
export enum AllOptions {
    Show = 'Show the cart',
    Command = 'New command',
    Quit = 'Exit',
}

/**
 * @description Opciones para caso de Cartas
 */
export enum OptCarte {
    ShowMenu = 'Show menus',
    ShowPlate = 'Show plates',
    Quit = 'Exit',
}

/**
 * @description Crear comando nuevo
 */
export enum CreateCommand {
    ChooseMenu = 'Menus',
    ChoosePlate= 'Plates',
    Create = 'Create new menu',
    Quit = 'Exit',
}

/**
 * @description Crear menu o plato personalizado
 */
export enum CreateCustom {
    IndividualPlate = 'Individual Plates',
    ModificationMenu = 'To do a modification of a menu',
    Quit = 'Exit',
}

/**
 * @description Opciones para Menu
 */
export enum OptMenu {
    Add = 'Add a new plate',
    Remove = 'Remove a plate',
    Quit = 'Exit',
}