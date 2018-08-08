import assign from 'object-assign';

/**
 * A collection of properties.
 */
type Properties <T extends object> = Array<Exclude<keyof T, (number | symbol)>>;

/**
 * Get a collection of properties of an object.
 */
const keys = Object.keys as <T extends object> (object: T) => Properties<T>;

/**
 * Type definition of reconstruct iterator function.
 */
export type ReconstructΛ <T extends object, U extends object> = (
  value: T[keyof T],
  property: keyof T,
  object: T
) => Partial<U> | false;

/**
 * Reconstruct an Object into a new one composing lambda's returned objects.
 * @example ```js
 * reconstruct({ A: 1, B: 2 }, (value, key) => ({ [key]: value + 1 }))
 * //=> { A: 2, B: 3 }
 * ```
 * @param object Object that contains the properties and methods.
 * @param λ Lambda to reconstructs object.
 */
const reconstruct = <T extends object, U extends object> (object: T, λ: ReconstructΛ<T, U>): U => {
  return keys(object).reduce((reconstruction, property) => {
    const partial = λ(object[property], property, object);
    if (!partial)
      return reconstruction;
    return assign(reconstruction, partial);
  }, {} as Partial<U>) as U;
};

export default reconstruct;
