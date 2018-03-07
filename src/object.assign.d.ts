declare module 'object.assign' {

  /**
   * Copy the values of all of the enumerable own properties from one or more source objects to a
   * target object. Returns the target object.
   * @param target
   * @param sources
   */
  function assign<T>(target: {}, ...sources: (T & {})[]): T & {}

  export default assign
}
