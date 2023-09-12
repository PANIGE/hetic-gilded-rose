/**
 * Represents an item with a name, sellIn (usage remaining), and quality.
 * This is an abstract base class for managing different types of items in the Gilded Rose inventory.
 */
export abstract class Item {
    name: string;
    sellIn: number;
    quality: number;

    /**
     * Creates a new Item with the specified name, sellIn, and quality.
     * @param name - The name of the item.
     * @param sellIn - The number of usages the item expires.
     * @param quality - The quality of the item, which determines its value.
     */
    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    /**
     * Updates the quality and sellIn values of the item based on its type-specific rules.
     * Subclasses must implement this method to handle the specific item type.
     */
    public abstract updateQuality(): void;

    /**
     * Increases the quality of the item by 1, up to a maximum value of 50.
     * Call this method when the item's quality should be incremented.
     */
    protected increaseQuality(): void {
        if (this.quality < 50) {
            this.quality++;
        }
    }

    /**
     * Decreases the quality of the item by 1, down to a minimum value of 0.
     * Call this method when the item's quality should be decremented.
     */
    protected decreaseQuality(): void {
        if (this.quality > 0) {
            this.quality--;
        }
    }

    /**
     * Decreases the sellIn value of the item by 1.
     * Call this method to reduce the number of usages remaining for the item.
     */
    protected decreaseSellIn(): void {
        this.sellIn--;
    }
}
