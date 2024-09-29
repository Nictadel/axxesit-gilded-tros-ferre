import {Item} from '../src/item';
import {GildedTros} from '../src/gilded-tros';

describe('GildedTrosTest', () => {
    const items: Item[] = [new Item('foo', 0, 0)];
    const app: GildedTros = new GildedTros(items);
    app.updateQuality();
    expect(app.items[0].name).toEqual('fixme');
});


describe('The original functionality', () => {

    const items: Item[] = [
        new Item('Ring of Cleansening Code', 10, 20),
        new Item('Good Wine', 2, 0),
        new Item('Elixir of the SOLID', 5, 7),
        new Item('B-DAWG Keychain', 0, 80),
        new Item('B-DAWG Keychain', -1, 80),
        new Item('Backstage passes for Re:Factor', 15, 20),
        new Item('Backstage passes for Re:Factor', 10, 49),
        new Item('Backstage passes for HAXX', 5, 49),
        // these smelly items do not work properly yet
        new Item('Duplicate Code', 3, 6),
        new Item('Long Methods', 3, 6),
        new Item('Ugly Variable Names', 3, 6)
    ];

    it('should update correctly for the initially known working items', () => {

        const goodItems = items.slice(0, 8)

        //Initial State

        expect(goodItems[0].toString()).toEqual('Ring of Cleansening Code, 10, 20');
        expect(goodItems[1].toString()).toEqual('Good Wine, 2, 0');
        expect(goodItems[2].toString()).toEqual('Elixir of the SOLID, 5, 7');
        expect(goodItems[3].toString()).toEqual('B-DAWG Keychain, 0, 80');
        expect(goodItems[4].toString()).toEqual('B-DAWG Keychain, -1, 80');
        expect(goodItems[5].toString()).toEqual('Backstage passes for Re:Factor, 15, 20');
        expect(goodItems[6].toString()).toEqual('Backstage passes for Re:Factor, 10, 49');
        expect(goodItems[7].toString()).toEqual('Backstage passes for HAXX, 5, 49');

        const app: GildedTros = new GildedTros(goodItems);

        //Day 1
        app.updateQuality();

        expect(goodItems[0].toString()).toEqual('Ring of Cleansening Code, 9, 19');
        expect(goodItems[1].toString()).toEqual('Good Wine, 1, 1');
        expect(goodItems[2].toString()).toEqual('Elixir of the SOLID, 4, 6');
        expect(goodItems[3].toString()).toEqual('B-DAWG Keychain, 0, 80');
        expect(goodItems[4].toString()).toEqual('B-DAWG Keychain, -1, 80');
        expect(goodItems[5].toString()).toEqual('Backstage passes for Re:Factor, 14, 21');
        expect(goodItems[6].toString()).toEqual('Backstage passes for Re:Factor, 9, 50');

        //Day 2
        app.updateQuality();

        expect(goodItems[0].toString()).toEqual('Ring of Cleansening Code, 8, 18');
        expect(goodItems[1].toString()).toEqual('Good Wine, 0, 2');
        expect(goodItems[2].toString()).toEqual('Elixir of the SOLID, 3, 5');
        expect(goodItems[3].toString()).toEqual('B-DAWG Keychain, 0, 80');
        expect(goodItems[4].toString()).toEqual('B-DAWG Keychain, -1, 80');
        expect(goodItems[5].toString()).toEqual('Backstage passes for Re:Factor, 13, 22');
        expect(goodItems[6].toString()).toEqual('Backstage passes for Re:Factor, 8, 50');
        expect(goodItems[7].toString()).toEqual('Backstage passes for HAXX, 3, 50');

        //Day 3
        app.updateQuality();
        expect(goodItems[0].toString()).toEqual('Ring of Cleansening Code, 7, 17');
        expect(goodItems[1].toString()).toEqual('Good Wine, -1, 4');
        expect(goodItems[2].toString()).toEqual('Elixir of the SOLID, 2, 4');
        expect(goodItems[3].toString()).toEqual('B-DAWG Keychain, 0, 80');
        expect(goodItems[4].toString()).toEqual('B-DAWG Keychain, -1, 80');
        expect(goodItems[5].toString()).toEqual('Backstage passes for Re:Factor, 12, 23');
        expect(goodItems[6].toString()).toEqual('Backstage passes for Re:Factor, 7, 50');
        expect(goodItems[7].toString()).toEqual('Backstage passes for HAXX, 2, 50');
    })
})
