declare module 'object.entries' {
  type Entry<T> = [keyof T, T[keyof T]]

  /**
   * Returns an array of key/values of the enumerable properties of an object.
   * @param object Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
   */
  function entries <T> (object: T): Array<Entry<T>>

  export default entries
}
