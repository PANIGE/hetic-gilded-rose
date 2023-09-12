import { Item } from "./Items/Item"


export class GildedRose {
    items: Array<Item>;

    constructor(items: Array<Item> = []) {
        this.items = items;
    }

    public updateItemsQuality() {
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            item.updateQuality();
        }
        return this.items;
    }
}