/**
 * @file Defines error which will be thrown when invalid input occures.
 */

 export class ArgumentError implements Error {
     public name = 'ArgumentError';

     constructor (public message: string) {}

     toString() {
         return `${this.name}: ${this.message}`;
     }
 }
