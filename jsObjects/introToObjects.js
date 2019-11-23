const person = {
    name: "Travis",
    age: 21,
    city: "LA"
}

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.city);

console.log(person["name"]);
console.log(person["age"]);
console.log(person["city"]);

person.name = "Robin";
person.age = 34;
console.log(person);