import { GildedTros } from '../src/gilded-tros'
import { Item } from '../src/item'

describe('app should work with original data', () => {
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
    new Item('Duplicate Code', 3, 12),
    new Item('Long Methods', 3, 12),
    new Item('Ugly Variable Names', 1, 12),
  ]

  const goodItems = items.slice(0, 8)

  const smellyItems = items.slice(8)

  const appGoodData: GildedTros = new GildedTros(goodItems)
  const appSmellyData: GildedTros = new GildedTros(smellyItems)

  it.each([
    {
      // Day 0 - Initial State
      expected: [
        'Ring of Cleansening Code, 10, 20',
        'Good Wine, 2, 0',
        'Elixir of the SOLID, 5, 7',
        'B-DAWG Keychain, 0, 80',
        'B-DAWG Keychain, -1, 80',
        'Backstage passes for Re:Factor, 15, 20',
        'Backstage passes for Re:Factor, 10, 49',
        'Backstage passes for HAXX, 5, 49',
      ],
    },
    {
      // Day 1
      expected: [
        'Ring of Cleansening Code, 9, 19',
        'Good Wine, 1, 1',
        'Elixir of the SOLID, 4, 6',
        'B-DAWG Keychain, 0, 80',
        'B-DAWG Keychain, -1, 80',
        'Backstage passes for Re:Factor, 14, 21',
        'Backstage passes for Re:Factor, 9, 50',
        'Backstage passes for HAXX, 4, 50',
      ],
    },
    {
      // Day 2
      expected: [
        'Ring of Cleansening Code, 8, 18',
        'Good Wine, 0, 2',
        'Elixir of the SOLID, 3, 5',
        'B-DAWG Keychain, 0, 80',
        'B-DAWG Keychain, -1, 80',
        'Backstage passes for Re:Factor, 13, 22',
        'Backstage passes for Re:Factor, 8, 50',
        'Backstage passes for HAXX, 3, 50',
      ],
    },
    {
      // Day 3
      expected: [
        'Ring of Cleansening Code, 7, 17',
        'Good Wine, -1, 4',
        'Elixir of the SOLID, 2, 4',
        'B-DAWG Keychain, 0, 80',
        'B-DAWG Keychain, -1, 80',
        'Backstage passes for Re:Factor, 12, 23',
        'Backstage passes for Re:Factor, 7, 50',
        'Backstage passes for HAXX, 2, 50',
      ],
    },
  ])('update the items correctly for day %#', ({ expected }) => {
    goodItems.forEach((item, index) => {
      expect(item.toString()).toEqual(expected[index])
    })
    appGoodData.updateQuality()
  })

  it.each([
    {
      // Day 0 - Initial State
      expected: [
        'Duplicate Code, 3, 12',
        'Long Methods, 3, 12',
        'Ugly Variable Names, 1, 12',
      ],
    },
    {
      // Day 1
      expected: [
        'Duplicate Code, 2, 10',
        'Long Methods, 2, 10',
        'Ugly Variable Names, 0, 10',
      ],
    },
    {
      // Day 2
      expected: [
        'Duplicate Code, 1, 8',
        'Long Methods, 1, 8',
        'Ugly Variable Names, -1, 6',
      ],
    },
    {
      // Day 3
      expected: [
        'Duplicate Code, 0, 6',
        'Long Methods, 0, 6',
        'Ugly Variable Names, -2, 2',
      ],
    },
  ])('update the smelly items correctly for day %#', ({ expected }) => {
    smellyItems.forEach((item, index) => {
      expect(item.toString()).toEqual(expected[index])
    })
    appSmellyData.updateQuality()
  })
})
