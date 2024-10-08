import { LEGENDARY_ITEM_QUALITY } from '../constants'
import { Item } from '../item'
import { LegendaryItem } from './legendary-item'

describe('legendaryItem', () => {
  it('should set quality to LEGENDARY_ITEM_QUALITY when updateQuality is called', () => {
    const item = new LegendaryItem(new Item('Excalibur', 10, 20))
    item.updateQuality()
    expect(item.quality).toBe(LEGENDARY_ITEM_QUALITY)
  })

  it('should not change the sellIn properties when updateQuality is called', () => {
    const item = new LegendaryItem(new Item('Excalibur', 10, 20))
    item.updateQuality()
    expect(item.sellIn).toBe(10)
  })
})
