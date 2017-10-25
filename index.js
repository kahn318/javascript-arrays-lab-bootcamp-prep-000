var kittens = ["Milo", "Otis", "Garfield"];

// appends a kitten to the end of the kitten array (mutate)
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

// prepends a kitten to the beginning of the kittens array (mutate)
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

// removes the last kitten from the kittens array (mutate)
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

// removes the first kitten from the kittens array (mutate)
function destructivelyRemoveFristKitten() {
  kittens.shift();
  return kittens;
}

// appends a kitten array and returns a new array, leaving the kittens array unchanged
function appendKitten(name) {
  return [...kittens, name];
}

// prepends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged
function prependKitten(name) {
  return [name, ...kittens];
}
