import { MAXIMUM_QUALITY, MINIMUM_QUALITY } from '../constants'
import { Item } from '../item'
import { StandardItem } from './standard-item'

describe('standardItem', () => {
  it('should decrease quality by 1 when sellIn is greater than 0', () => {
    const item = new StandardItem(new Item('Test Item', 10, 20))
    item.updateQuality()
    expect(item.quality).toBe(19)
  })

  it('should decrease quality by 2 when sellIn is less than or equal to 0', () => {
    const item = new StandardItem(new Item('Test Item', 0, 20))
    item.updateQuality()
    expect(item.quality).toBe(18)
  })

  it('should not decrease quality below MINIMUM_QUALITY', () => {
    const item = new StandardItem(new Item('Test Item', 10, MINIMUM_QUALITY))
    item.updateQuality()
    expect(item.quality).toBe(MINIMUM_QUALITY)
  })

  it('should decrease sellIn by 1', () => {
    const item = new StandardItem(new Item('Test Item', 10, 20))
    item.updateQuality()
    expect(item.sellIn).toBe(9)
  })

  it('should still decrease sellIn by 1 when sellIn is less than 0', () => {
    const item = new StandardItem(new Item('Test Item', -2, 20))
    item.updateQuality()
    expect(item.sellIn).toBe(-3)
  })

  it('should clamp initial invalid quality between MINIMUM_QUALITY and MAXIMUM_QUALITY', () => {
    const item = new StandardItem(new Item('Test Item', 10, MINIMUM_QUALITY - 10))
    item.updateQuality()
    expect(item.quality).toBe(MINIMUM_QUALITY)

    const item2 = new StandardItem(new Item('Test Item', 10, MAXIMUM_QUALITY + 10))
    item2.updateQuality()
    expect(item2.quality).toBe(MAXIMUM_QUALITY)
  })
})
