// Object in Typescript //
var inflixMobile = {
    brand: "Infiix",
    model: "Hot11",
    color: "Black",
    storage: 128,
    price: 30000,
};
console.log(inflixMobile.brand);
// Nested object //
var book = {
    title: "Jannaat kay Pattay",
    author: {
        name: "Nimra Ahmed",
        nationality: "Pakistani",
    },
    publishedYear: 2013,
};
console.log(book.title);
console.log(book.author.name);
// Array Of Object //
var fruits = [
    { name: "Apple", color: "Red" },
    { name: "Banana", color: "Yellow" },
    { name: "Grapes", color: "Green" },
];
fruits.forEach(function (fruit) {
    console.log(fruit.name);
    console.log(fruit.color);
});
var studentDetailed = {
    name: "Areeba",
    department: "Economic",
    rollNo: 46789,
    isPassed: true,
};
console.log(studentDetailed.name);
console.log(studentDetailed.department);
console.log(studentDetailed.rollNo);
console.log(studentDetailed.isPassed);
