export function requireStr(str: string): string {
    if (!str) {
        throw Error(`Error - expected str but found ${str}`);
    }
    return str;
}

export function requireNumber(str: string): number {
    if (!str) {
        throw Error(`Error - expected str to exist but found ${str}`);
    }
    const num: number = Number.parseInt(str);
    if (Number.isNaN(num)) {
        throw Error(`Error - expected num from ${str} but got ${NaN}`);
    }
    return num;
}
