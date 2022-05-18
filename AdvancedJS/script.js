var animal = {
  kind: "human",
};

console.log(animal);

var asim = {};

asim.__proto__ = animal;

console.log(asim.kind);
