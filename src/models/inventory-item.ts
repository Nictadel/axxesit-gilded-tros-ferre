import { Item } from "../item";

export abstract class InventoryItem extends Item{
    abstract updateQuality(): void;
}
