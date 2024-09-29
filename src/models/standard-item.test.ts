import { StandardItem } from './standard-item';
import { MAXIMUM_QUALITY, MINIMUM_QUALITY } from '../constants';


describe('Standard Item', () => {
  it('should decrease quality by 1 when sellIn is greater than 0', () => {
    const item = new StandardItem('Test Item', 10, 20);
    item.updateQuality();
    expect(item.quality).toBe(19);
  });

  it('should decrease quality by 2 when sellIn is less than or equal to 0', () => {
    const item = new StandardItem('Test Item', 0, 20);
    item.updateQuality();
    expect(item.quality).toBe(18);
  });

  it('should not decrease quality below 0', () => {
    const item = new StandardItem('Test Item', 10, 0);
    item.updateQuality();
    expect(item.quality).toBe(0);
  });

  it('should decrease sellIn by 1', () => {
    const item = new StandardItem('Test Item', 10, 20);
    item.updateQuality();
    expect(item.sellIn).toBe(9);
  });

  it('should still decrease sellIn by 1 when sellIn is less than 0', () => {
    const item = new StandardItem('Test Item', -2, 20);
    item.updateQuality();
    expect(item.sellIn).toBe(-3);
  });

  it('should clamp quality to minimum quality when quality is below minimum', () => {
    const item = new StandardItem('Test Item', 10, MINIMUM_QUALITY - 1);
    item.updateQuality();
    expect(item.quality).toBe(MINIMUM_QUALITY);
  });

  it('should clamp quality to maximum quality when quality is above maximum', () => {
    const item = new StandardItem('Test Item', 10, MAXIMUM_QUALITY + 10);
    item.updateQuality();
    expect(item.quality).toBe(MAXIMUM_QUALITY);
  });
});

