var kittens = ["Milo", "Otis", "Garfield"];

// appends a kitten to the end of the kitten array (mutate)
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens
}
