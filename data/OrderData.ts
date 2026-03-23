/** Represents an order in the database */
export interface OrderData {
    readonly id: number;
    readonly dateStr: string;
    readonly note?: string;
    readonly userId: number;
}