import { MAXIMUM_QUALITY, MINIMUM_QUALITY, SELL_IN_EXPIRED } from "../constants";
import { InventoryItem } from "./inventory-item";

export class StandardItem extends InventoryItem {

  private DEGRADE_RATE = 1;

  private degradeQuality(amount: number): void {
    if (this.quality - amount < MINIMUM_QUALITY) {
      this.quality = MINIMUM_QUALITY;
    }
    else {
      this.quality -= amount;
    }
  }

  updateQuality(): void {

    if (this.quality > MAXIMUM_QUALITY){
      this.quality = MAXIMUM_QUALITY;
    }

    this.sellIn--;

    if (this.sellIn <= SELL_IN_EXPIRED) {
      this.degradeQuality(this.DEGRADE_RATE * 2);
    }
    else {
      this.degradeQuality(this.DEGRADE_RATE);
    }
  }
}
