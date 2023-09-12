import { Item } from './Item';

export class NormalItem extends Item {
    constructor(sellIn: number, quality: number) {
        super('Normal Item', sellIn, quality);
    }

    updateQuality() {
        this.decreaseQuality();
        this.decreaseSellIn();
        if (this.sellIn < 0) {
            this.decreaseQuality();
        }
    }
}