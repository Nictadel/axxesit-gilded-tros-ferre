import { MAXIMUM_QUALITY, MINIMUM_QUALITY } from '../constants'
import { ImprovingItem } from './improving-item'

describe('improvingItem', () => {
  it('should decrease sellIn by 1', () => {
    const item = new ImprovingItem('Test Item', 10, 20)
    item.updateQuality()
    expect(item.sellIn).toBe(9)
  })

  it('should increase quality by 1', () => {
    const item = new ImprovingItem('Test Item', 10, 20)
    item.updateQuality()
    expect(item.quality).toBe(21)
  })

  it('should not increase quality above MAXIMUM_QUALITY', () => {
    const item = new ImprovingItem('Test Item', 10, MAXIMUM_QUALITY)
    item.updateQuality()
    expect(item.quality).toBe(MAXIMUM_QUALITY)
  })

  it('should clamp initial invalid quality between MINIMUM_QUALITY and MAXIMUM_QUALITY', () => {
    const item = new ImprovingItem('Test Item', 10, MINIMUM_QUALITY - 10)
    item.updateQuality()
    expect(item.quality).toBe(MINIMUM_QUALITY)

    const item2 = new ImprovingItem('Test Item', 10, MAXIMUM_QUALITY + 10)
    item2.updateQuality()
    expect(item2.quality).toBe(MAXIMUM_QUALITY)
  })
})
