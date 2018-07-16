import { assign, keys } from './object';

type ReconstructΛ <T, U extends Object> = (
  value: T[keyof T],
  property: keyof T,
  object: T
) => Partial<U>;

/**
 * Reconstruct an Object into a new one composing lambda's returned objects.
 * @example ```js
 * const object = {A: 1, B: 2}
 * reconstruct(object, (value, key) => ({ [key]: value + 1 })) === {A: 2, B: 3}
 * ```
 * @param object Object that contains the properties and methods.
 * @param λ Lambda to reconstructs object.
 */
function reconstruct <T extends Object, U extends Object> (object: T, λ: ReconstructΛ<T, U>): U {
  const merge = (reconstruction: Object, property: keyof T) => {
    const partial = λ(object[property], property, object);
    if (!partial)
      return reconstruction;
    return assign(reconstruction, partial);
  };

  const reconstruction = keys(object).reduce(merge, {}) as U;

  return reconstruction;
}

export { ReconstructΛ, reconstruct, reconstruct as default };
