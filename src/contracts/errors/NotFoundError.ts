/**
 * @file Defines error which will be thrown when certain resource is not found.
 */

export class NotFoundError implements Error {
    public name = 'NotFoundError';

    constructor (public message: string) {}

    toString() {
        return `${this.name}: ${this.message}`;
    }
}