import { AgedBrie } from "../src/class/Items/AgedBrie";
import { BackstagePass } from "../src/class/Items/BackstagePass";
import { NormalItem } from "../src/class/Items/NormalItem";
import { Sulfuras } from "../src/class/Items/Sulfuras";
import { GildedRose } from "../src/class/GildedRose";
import { Item, GildedRoseOld } from "../src/class/oldCode";

describe('AgedBrie', () => {
    it('Should Update Quality correctly', () => {
        const item = new AgedBrie(10, 20);
        item.updateQuality();
        expect(item.quality).toEqual(21);
    });
    it('Should Update SellIn Correctly', () => {
        const item = new AgedBrie(10, 20);
        item.updateQuality();
        expect(item.sellIn).toEqual(9);
    });
    it('Should increase quality by 2 if SellIn is 0', () => {
        const item = new AgedBrie(0, 20);
        item.updateQuality();
        expect(item.quality).toEqual(22);
    });
});

describe('BackstagePass', () => {
    it('Should Update Quality correctly', () => {
        const item = new BackstagePass(15, 20);
        item.updateQuality();
        expect(item.quality).toEqual(21);
    });
    it('Should Update SellIn Correctly', () => {
        const item = new BackstagePass(15, 20);
        item.updateQuality();
        expect(item.sellIn).toEqual(14);
    });
    it("Should increase quality by 2 if sell in is between 11 (excluded) and 6 (included)", () => {
        let item = new BackstagePass(11, 20);
        item.updateQuality();
        expect(item.quality).toEqual(21);

        for (let i = 10; i <= 6; i--) {
            item = new BackstagePass(i, 20);
            item.updateQuality();
            expect(item.quality).toEqual(22);
        }
    });
    it("Should increase quality by 3 if sell in is below 6", () => {
        let item = new BackstagePass(6, 20);
        item.updateQuality();
        expect(item.quality).toEqual(22);
        for (let i = 5; i < 0; i--) {
            item = new BackstagePass(i, 20);
            item.updateQuality();
            expect(item.quality).toEqual(23);
        }
    });
    it("Should set quality to 0 if SellIn is 0 or below", () => {
        let item = new BackstagePass(0, 20);
        item.updateQuality();
        expect(item.quality).toEqual(0);
    });
});

describe('NormalItem', () => {
    it('Should Update Quality correctly', () => {
        const item = new NormalItem(10, 20);
        item.updateQuality();
        expect(item.quality).toEqual(19);
    });
    it('Should Update SellIn Correctly', () => {
        const item = new NormalItem(10, 20);
        item.updateQuality();
        expect(item.sellIn).toEqual(9);
    });
    it('Should decrease Quality twice if SellIn is 0 or below', () => {
        const item = new NormalItem(0, 20);
        item.updateQuality();
        expect(item.quality).toEqual(18);
    })
});

describe('Sulfuras', () => {
    it('Should have no behaviour in quality updating', () => {
        const item = new Sulfuras(10, 20);
        item.updateQuality();
        expect(item.quality).toEqual(20);
        expect(item.sellIn).toEqual(10);
    });
});
describe('Gilded Rose', () => {
    const newitems = [
        new AgedBrie(10, 20),
        new BackstagePass(15, 20),
        new NormalItem(20, 10),
        new Sulfuras(0, 80),
    ];
    const oldItems = [
        new Item("Aged Brie", 10, 20),
        new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20),
        new Item("Normal Item", 20, 10),
        new Item("Sulfuras, Hand of Ragnaros", 0, 80),
    ]
    const toEq = [
        "Aged Brie, Quality: 21, SellIn: 9",
        "Backstage passes to a TAFKAL80ETC concert, Quality: 21, SellIn: 14",
        "Normal Item, Quality: 9, SellIn: 19",
        "Sulfuras, Hand of Ragnaros, Quality: 80, SellIn: 0",
    ]

    it('should match the golden master for the new version', () => {
        const gildedRose = new GildedRose(newitems);
        gildedRose.updateItemsQuality();
        expect(newitems.map(item => `${item.name}, Quality: ${item.quality}, SellIn: ${item.sellIn}`)).toEqual(toEq);
    });
    it('should match the golden master for the old version', () => {
        const gildedRose = new GildedRoseOld(oldItems);
        gildedRose.updateItemsQuality();
        expect(newitems.map(item => `${item.name}, Quality: ${item.quality}, SellIn: ${item.sellIn}`)).toEqual(toEq);
    });
});