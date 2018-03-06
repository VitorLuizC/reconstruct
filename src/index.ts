import toEntries from 'object.entries'

const getProperties = <T>(object: T) => toEntries(object).map(([ property ]) => property)
const getValues = <T>(object: T) => toEntries(object).map(([ , value ]) => value)

export { getProperties, getValues }
