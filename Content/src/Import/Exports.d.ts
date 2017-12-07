/**
 * Use example:
 *      var kvs = [ ["A", 234.45], ["B", 23458.0214] ];
 *      printPairsPadded(3, 12, kvs);
 */
export declare function printPairsPadded<T1, T2>(leftPad: number, rightPad: number, kvs: Iterable<[T1,T2]>): string;
