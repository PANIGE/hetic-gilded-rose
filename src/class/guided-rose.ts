import { Item } from './item';

export class GildedRose {
    items: Array<Item>;

    constructor(items: Array<Item> = []) {
        this.items = items;
    }

    updateQuality() {
        console.log('=== Starting Update Quality ===');
        for (let i = 0; i < this.items.length; i++) {
            const item = this.items[i];
            console.log(`Updating item: ${item.name}`);

            if (item.name === "Aged Brie") {
                this.updateAgedBrieQuality(item);
            } else if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
                this.updateBackstagePassQuality(item);
            } else if (item.name === "Sulfuras, Hand of Ragnaros") {
                // Sulfuras n'a pas besoin de mises à jour de qualité ni de date de péremption
                console.log(`No update needed for ${item.name}`);
            } else {
                this.updateNormalItemQuality(item);
            }

            console.log(`Updated item: ${item.name}, Quality: ${item.quality}, SellIn: ${item.sellIn}`);
        }
        console.log('=== Finished Update Quality ===');

        return this.items;
    }

    private updateAgedBrieQuality(item: Item) {
        if (item.quality < 50) {
            item.quality++;
        }
        item.sellIn--;
        if (item.sellIn < 0 && item.quality < 50) {
            item.quality++;
        }
    }

    private updateBackstagePassQuality(item: Item) {
        if (item.quality < 50) {
            item.quality++;
            if (item.sellIn < 11 && item.quality < 50) {
                item.quality++;
            }
            if (item.sellIn < 6 && item.quality < 50) {
                item.quality++;
            }
        }
        item.sellIn--;
        if (item.sellIn < 0) {
            item.quality = 0;
        }
    }

    private updateNormalItemQuality(item: Item) {
        if (item.quality > 0) {
            item.quality--;
        }
        item.sellIn--;
        if (item.sellIn < 0 && item.quality > 0) {
            item.quality--;
        }
    }
}