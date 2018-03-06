declare module 'object.entries' {

  /**
   * Returns an array of key/values of the enumerable properties of an object.
   * @param object Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  function toEntries <T> (object: T): Array<[keyof T, T[keyof T]]>

  export default toEntries
}
