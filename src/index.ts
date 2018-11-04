import assign from 'nano-assign';

/**
 * An array of object keys.
 */
type Keys <T> = Array<Exclude<keyof T, (number | symbol)>>;

/**
 * Gey an array of object keys.
 */
const keys = Object.keys as <T> (object: T) => Keys<T>;

/**
 * Type definition of reconstruct iterator function.
 */
export type ReconstructΛ <T, U> = (value: T[keyof T], key: keyof T) => Partial<U> | false;

/**
 * Reconstruct an Object into a new one composing lambda's returned objects.
 * @example ```js
 * reconstruct({ A: 1, B: 2 }, (value, key) => ({ [key]: value + 1 }))
 * //=> { A: 2, B: 3 }
 * ```
 * @param object Object that contains the properties and methods.
 * @param λ Lambda to reconstructs object.
 */
const reconstruct = <T, U> (object: T, λ: ReconstructΛ<T, U>): U => {
  const pieces = keys(object).map((key) => λ(object[key], key));
  return assign(Object.create(null), ...pieces) as U;
};

export default reconstruct;
