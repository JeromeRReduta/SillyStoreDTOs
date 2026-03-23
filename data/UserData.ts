/** Represents a user in the database */
export interface User {
    readonly id: number;
    readonly username: string;
    readonly pwHash: string;
}