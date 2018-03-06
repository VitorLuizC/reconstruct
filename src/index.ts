import toEntries from 'object.entries'

type ReconstructΛ = <T extends Object, U extends Object>(value: T[keyof T], property: keyof T, object: T) => U

const reconstruct = <T extends Object, U extends Object>(object: T, λ: ReconstructΛ) => {
  const merge = (result: U, [ property, value ]: [keyof T, T[keyof T]]) => {
    return Object.assign({}, result, λ(value, property, object))
  }

  const entries = toEntries(object)
  const result = entries.reduce(merge, {})
  return result
}

export { ReconstructΛ, reconstruct, reconstruct as default }
