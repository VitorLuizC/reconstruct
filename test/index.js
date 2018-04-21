import test from 'ava';
import reconstruct from '../';

test('Module exports a function', (context) => {
  context.is(typeof reconstruct, 'function');
});

test('Reconstructs an object iterating its properties & values', (context) => {
  const original = {
    name: 'Ryan',
  };

  const user = reconstruct(original, (value, property) => ({
    [property]: value + ' 2'
  }));

  context.not(original, user);
  context.is(original.name + ' 2', user.name);
});

test('Returning falsy on callback is safe', (context) => {
  const original = {
    name: 'Ryan',
    stars: 5,
  };

  const user = reconstruct(original, (value, property) => {
    if (property === 'name')
      return false;
    return { [property]: value };
  });

  context.true(user && typeof user === 'object');
  context.true('stars' in user);
  context.false('name' in user);
});
