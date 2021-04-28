//Lesson 11
function calculateTotalPrice (orderedQuantity, pricePerItem) {
    const totalPrice = orderedQuantity * pricePerItem;
    return totalPrice;
};

console.log(calculateTotalPrice(5,100));