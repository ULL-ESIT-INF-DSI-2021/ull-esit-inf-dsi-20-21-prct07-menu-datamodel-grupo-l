import { Plate } from './plate';

/**
 * @description Class jsonPlate that is used to parse Plates
 */
export class jsonPlate {

  public static getJsonPlate(plate: Plate): Object {
    return {
      name: plate.getName(),
      ingredients: plate.getIngredients().map((item) => item.getName()),
      category: plate.getCategory(),
      kcal: plate.getKcal(),
      totalPrice: plate.getTotalPrice(),
      mainGroup: plate.getMainGroup(),
      foodGroupList: plate.getFoodGroupList(),
    };
  }

  public static plateCollectionToJson(selectedPlates: Plate[]): Object[] {
    return selectedPlates.map((plate) => jsonPlate.getJsonPlate(plate));
  }
}