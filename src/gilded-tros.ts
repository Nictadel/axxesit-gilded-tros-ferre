import type { Item } from './item'
import { ConferenceTicketItem } from './models/conference-ticket-item'
import { ImprovingItem } from './models/improving-item'
import { LegendaryItem } from './models/legendary-item'
import { SmellyItem } from './models/smelly-item'
import { StandardItem } from './models/standard-item'

const LEGENDARY_ITEM_NAMES = ['B-DAWG Keychain']
const BACKSTAGE_PASS_ITEM_NAMES = ['Backstage passes for Re:Factor', 'Backstage passes for HAXX']
const SMELLY_ITEM_NAMES = ['Duplicate Code', 'Long Methods', 'Ugly Variable Names']
const IMPROVING_ITEM_NAMES = ['Good Wine']

export class GildedTros {
  constructor(public items: Array<Item>) {

  }

  public updateQuality(): void {
    this.items
      .map((item) => {
        if (LEGENDARY_ITEM_NAMES.includes(item.name)) {
          return new LegendaryItem(item)
        }

        if (BACKSTAGE_PASS_ITEM_NAMES.includes(item.name)) {
          return new ConferenceTicketItem(item)
        }

        if (SMELLY_ITEM_NAMES.includes(item.name)) {
          return new SmellyItem(item)
        }

        if (IMPROVING_ITEM_NAMES.includes(item.name)) {
          return new ImprovingItem(item)
        }

        return new StandardItem(item)
      })
      .forEach(item => item.updateQuality())
  }
}
