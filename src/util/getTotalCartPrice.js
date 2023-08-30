export default function getTotalCartPrice(array) {
  let subTotal = 0;
  array.forEach((element) => {
    subTotal += element.quantityInCart * element.price;
  });
  return subTotal;
}
