import { LEGENDARY_ITEM_QUALITY } from '../constants'
import { InventoryItem } from './inventory-item'

export class LegendaryItem extends InventoryItem {
  updateQuality(): void {
    this.quality = LEGENDARY_ITEM_QUALITY
  }
}
