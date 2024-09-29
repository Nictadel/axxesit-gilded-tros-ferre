import type { Item } from '../item'

export abstract class InventoryItem {
  private originalItem: Item

  constructor(item: Item) {
    this.originalItem = item
  }

  abstract updateQuality(): void

  toString(): string {
    return this.originalItem.toString()
  }

  public get name(): string {
    return this.originalItem.name
  }

  public set name(name: string) {
    this.originalItem.name = name
  }

  public get sellIn(): number {
    return this.originalItem.sellIn
  }

  public set sellIn(sellIn: number) {
    this.originalItem.sellIn = sellIn
  }

  public get quality(): number {
    return this.originalItem.quality
  }

  public set quality(quality: number) {
    this.originalItem.quality = quality
  }
}
