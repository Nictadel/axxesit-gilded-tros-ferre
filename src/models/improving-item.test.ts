import { ImprovingItem } from "./improving-item";
import { MAXIMUM_QUALITY, MINIMUM_QUALITY } from "../constants";

describe('Improving Item', () => {
  it('should decrease sellIn by 1', () => {
    const item = new ImprovingItem('Test Item', 10, 20);
    item.updateQuality();
    expect(item.sellIn).toBe(9);
  });

  it('should increase quality by 1', () => {
    const item = new ImprovingItem('Test Item', 10, 20);
    item.updateQuality();
    expect(item.quality).toBe(21);
  });

  it('should not increase quality above MAXIMUM_QUALITY', () => {
    const item = new ImprovingItem('Test Item', 10, MAXIMUM_QUALITY);
    item.updateQuality();
    expect(item.quality).toBe(MAXIMUM_QUALITY);
  });

  it('should not decrease quality below MINIMUM_QUALITY', () => {
    const item = new ImprovingItem('Test Item', 10, MINIMUM_QUALITY - 10);
    item.updateQuality();
    expect(item.quality).toBe(MINIMUM_QUALITY);
  });
});
