import { MAXIMUM_QUALITY, MINIMUM_QUALITY } from "../constants";
import clamp from "../helpers/clamp";
import { InventoryItem } from "./inventory-item";

export class ImprovingItem extends InventoryItem {
  updateQuality(): void {
    this.sellIn--;
    this.quality = clamp(this.quality + 1, MINIMUM_QUALITY, MAXIMUM_QUALITY);
  }
}
