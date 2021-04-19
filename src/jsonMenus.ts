import { Menu } from './menu';
import { jsonPlate } from './jsonPlate';

/**
 * @description Class jsonMenu that is used to parse menus
 */
export class jsonMenu {

  public static getJsonMenu(menu: Menu): Object {
    return {
      name: menu.getName(),
      plates: menu.getPlates().map((plate) => jsonPlate.getJsonPlate(plate)),
      kcal: menu.getKcal(),
      totalPrice: menu.getTotalPrice(),
      mainGroup: menu.getMainGroup(),
      foodGroupList: menu.getFoodGroupList(),
    };
  }

  public static menuCollectionToJson(selectedMenus: Menu[]): Object[] {
    return selectedMenus.map((menu) => jsonMenu.getJsonMenu(menu));
  }
}