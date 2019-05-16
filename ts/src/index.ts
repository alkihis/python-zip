/**
 * Iterate through Iterables together, until one of the iterables is over
 * @param its Numerous iterable objects (n)
 * @yields Tuple of n values
 */
export default function* zip<T>(...its: Iterable<T>[]) : IterableIterator<T[]> {
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

/**
 * Iterate through Iterables together, until all iterables are over
 * @param its Numerous iterable objects (n)
 * @yields Tuple of n values
 */
export function* zipLongest<T>(...its: Iterable<T>[]) : IterableIterator<T[]> {
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
