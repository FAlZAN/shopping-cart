export default function getTotalItemsInCart(array) {
  let totalItems = 0;
  array.forEach((element) => {
    totalItems += element.quantityInCart;
  });
  return totalItems;
}
