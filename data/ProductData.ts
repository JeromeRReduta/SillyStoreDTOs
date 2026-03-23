/** Represents a product in the database */
export interface ProductData {
    readonly id: number;
    readonly imageSrc: string;
    readonly title: string;
    readonly description: string;
    readonly price: number;
}