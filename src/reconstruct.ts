import assign from 'object.assign'
import entries from 'object.entries'

type ReconstructΛ<T extends Object, U extends Object> = (
  value: T[keyof T],
  property: keyof T,
  object: T
) => U & {}

/**
 * Reconstruct an Object into a new one composing lambda's returned objects.
 * @example ```js
 * const object = {A: 1, B: 2}
 * reconstruct(object, (value, key) => ({ [key]: value + 1 })) === {A: 2, B: 3}
 * ```
 * @param object Object that contains the properties and methods.
 * @param λ Lambda to reconstructs object.
 */
const reconstruct = <T extends Object, U extends Object>(
  object: T,
  λ: ReconstructΛ<T, U>
): U & {} => {
  const merge = (
    result: U & {},
    [ property, value ]: [keyof T, T[keyof T]]
  ) => assign({}, result, λ(value, property, object))
  const result = entries(object).reduce(merge, {}) as U & {}
  return result
}

export { ReconstructΛ, reconstruct, reconstruct as default }
