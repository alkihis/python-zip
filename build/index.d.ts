/**
 * Iterate through Iterables together, until one of the iterable are over
 * @param its Numerous iterable objects (n)
 * @yields Tuple of n values
 */
export default function zip<T>(...its: Iterable<T>[]): IterableIterator<T[]>;
/**
 * Iterate through Iterables together, until all iterables are over
 * @param its Numerous iterable objects (n)
 * @yields Tuple of n values
 */
export declare function zipLongest<T>(...its: Iterable<T>[]): IterableIterator<T[]>;
