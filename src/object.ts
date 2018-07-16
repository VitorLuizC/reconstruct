import polyfill from 'object-keys';

type GetKeys = <T extends Object> (object: T) => Array<keyof T>;

export const keys = (Object.keys || polyfill) as GetKeys;

export { default as assign } from 'object-assign';
