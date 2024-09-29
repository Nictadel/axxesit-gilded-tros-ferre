import { StandardItem } from './standard-item';

describe('Standard Item', () => {
    it('should decrease quality by 1 when sellIn is greater than 0', () => {
        const item = new StandardItem('Ring of Cleansening Code', 10, 20);
        item.updateQuality();
        expect(item.sellIn).toBe(9);
        expect(item.quality).toBe(19);
    })

    it('should decrease quality by 2 when sellIn is less than 0', () => {
        const item = new StandardItem('Ring of Cleansening Code', 0, 20);
        item.updateQuality();
        expect(item.sellIn).toBe(-1);
        expect(item.quality).toBe(18);
    })

    it('should not decrease quality below 0', () => {
        const item = new StandardItem('Ring of Cleansening Code', 10, 0);
        item.updateQuality();
        expect(item.quality).toBe(0);
    })

    it('should decrease sellIn by 1', () => {
        const item = new StandardItem('Ring of Cleansening Code', 10, 20);
        item.updateQuality();
        expect(item.sellIn).toBe(9);
    })

    it ('should still decrease sellIn by 1 when sellIn is less than 0', () => {
        const item = new StandardItem('Ring of Cleansening Code', -2, 20);
        item.updateQuality();
        expect(item.sellIn).toBe(-3);
    })
})
