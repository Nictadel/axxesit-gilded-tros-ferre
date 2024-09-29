import { MAXIMUM_QUALITY, MINIMUM_QUALITY, SELL_IN_EXPIRED } from '../constants'
import clamp from '../helpers/clamp'
import { InventoryItem } from './inventory-item'

export class SmellyItem extends InventoryItem {
  updateQuality(): void {
    this.sellIn--

    this.quality = clamp(
      this.sellIn < SELL_IN_EXPIRED
        ? this.quality - 4
        : this.quality - 2,
      MINIMUM_QUALITY,
      MAXIMUM_QUALITY,
    )
  }
}
