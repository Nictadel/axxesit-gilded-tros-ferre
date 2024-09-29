import { MAXIMUM_QUALITY, MINIMUM_QUALITY } from '../constants'
import clamp from '../helpers/clamp'
import { InventoryItem } from './inventory-item'

export class ConferenceTicketItem extends InventoryItem {
  updateQuality(): void {
    this.sellIn--

    if (this.sellIn < 0) {
      this.quality = 0
      return
    }

    if (this.sellIn < 5) {
      this.quality = clamp(this.quality + 3, MINIMUM_QUALITY, MAXIMUM_QUALITY)
      return
    }

    if (this.sellIn < 10) {
      this.quality = clamp(this.quality + 2, MINIMUM_QUALITY, MAXIMUM_QUALITY)
      return
    }
    this.quality = clamp(this.quality + 1, MINIMUM_QUALITY, MAXIMUM_QUALITY)
  }
}
