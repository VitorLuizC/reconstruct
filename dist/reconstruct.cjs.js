/*!
 * reconstruct v0.1.4
 * (c) 2018-present Vitor Luiz Cavalcanti <vitorluizc@outlook.com> (https://vitorluizc.github.io)
 * Released under the MIT License.
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var assign = _interopDefault(require('object.assign'));
var entries = _interopDefault(require('object.entries'));

/**
 * Reconstruct an Object into a new one composing lambda's returned objects.
 * @example ```js
 * const object = {A: 1, B: 2}
 * reconstruct(object, (value, key) => ({ [key]: value + 1 })) === {A: 2, B: 3}
 * ```
 * @param object Object that contains the properties and methods.
 * @param λ Lambda to reconstructs object.
 */
var reconstruct = function (object, λ) {
  var merge = function (result, ref) {
    var property = ref[0];
    var value = ref[1];

    return assign({}, result, λ(value, property, object));
  };
  var result = entries(object).reduce(merge, {});
  return result;
};

exports.reconstruct = reconstruct;
exports['default'] = reconstruct;
