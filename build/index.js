"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Iterate through Iterables together, until one of the iterable are over
 * @param its Numerous iterable objects (n)
 * @yields Tuple of n values
 */
function* zip(...its) {
    // Get all iterators from Iterable objects
    const ites = its.map(e => e[Symbol.iterator]());
    // Get first values
    let values = ites.map(e => e.next());
    // Continue until one of the iterators is over
    while (values.every(e => !e.done)) {
        // Yield current values together
        yield values.map(e => e.value);
        // Get all next values
        values = ites.map(e => e.next());
    }
}
exports.default = zip;
/**
 * Iterate through Iterables together, until all iterables are over
 * @param its Numerous iterable objects (n)
 * @yields Tuple of n values
 */
function* zipLongest(...its) {
    // Get all iterators from Iterable objects
    const ites = its.map(e => e[Symbol.iterator]());
    // Get first values
    let values = ites.map(e => e.next());
    // Continue until one of the iterators is over
    while (values.some(e => !e.done)) {
        // Yield current values together
        yield values.map(e => e.value);
        // Get all next values
        values = ites.map(e => e.next());
    }
}
exports.zipLongest = zipLongest;
