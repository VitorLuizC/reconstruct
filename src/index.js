import assign from 'object.assign';
import entries from 'object.entries';
/**
 * Reconstruct an Object into a new one composing lambda's returned objects.
 * @example ```js
 * const object = {A: 1, B: 2}
 * reconstruct(object, (value, key) => ({ [key]: value + 1 })) === {A: 2, B: 3}
 * ```
 * @param object Object that contains the properties and methods.
 * @param λ Lambda to reconstructs object.
 */
const reconstruct = (object, λ) => {
    const merge = (result, [property, value]) => assign({}, result, λ(value, property, object));
    const result = entries(object).reduce(merge, {});
    return result;
};
export { reconstruct, reconstruct as default };
