const object = {
  name: "Mica",
  role: "Teacher",
};

const newObject = { ...object, campus: "Barcelona" };

console.log(newObject);

const modifiedObject = {
  ...object,
  name: "Marcel",
  hasABike: true,
};

console.log(modifiedObject);
