var kittens = ["Milo", "Otis", "Garfield"];

// appends a kitten to the end of the kitten array (mutate)
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

// prepends a kitten to the beginning of the kittens array
function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

// removes the last kitten from the kittens array
function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}
