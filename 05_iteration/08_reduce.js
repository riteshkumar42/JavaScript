// The .reduce() method is used to reduce an array to a single value — like a total, a product, a combined object, etc.
const myNums = [1, 2, 3, 4]

// const total = myNums.reduce(function (previousValue, currentValue) {
//     console.log(`prevVal: ${previousValue} and currVal ${currentValue}`);
//     return previousValue + currentValue //* RETURN :- +, -, *, /
// }, 10) //* initialValue is 0


const total = myNums.reduce((previousValue, currentValue) => previousValue + currentValue, 0)

console.log(total);


const shoppingCart = [
    {
        itemName: "Laptop",
        price: 89999,
        discount: 1999
    },
    {
        itemName: "Keyword",
        price: 3999,
        discount: 239
    },
    {
        itemName: "Mouse",
        price: 999,
        discount: 99
    },
    {
        itemName: "Specker",
        price: 4999,
        discount: 0
    },
    {
        itemName: "Headphone",
        price: 2999,
        discount: 499
    },
]

const totalPrice = shoppingCart.reduce((previousValue, item) => previousValue + item.price, 0)

console.log(totalPrice);