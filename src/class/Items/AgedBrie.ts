import { Item } from './Item';

export class AgedBrie extends Item {
    constructor(sellIn: number, quality: number) {
        super('Aged Brie', sellIn, quality);
    }

    updateQuality() {
        this.increaseQuality();
        this.decreaseSellIn();
        if (this.sellIn < 0) {
            this.increaseQuality();
        }
    }
}