declare function keys <T extends Object> (object: T): Array<keyof T>;

declare namespace keys {
  function shim (): typeof keys;
}

export = keys;
