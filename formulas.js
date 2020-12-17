function BOOK_PRICE(basePrice, bookCategory) {
  const minimumPrice = 5;
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const christmasMonth = 11; //Month is zero-based

  let discountPercent = 0.0;
  if (bookCategory === 'Children' && christmasMonth === currentMonth)
    discountPercent = 0.05;

  let price = basePrice - basePrice * discountPercent;
  return Math.max(minimumPrice, price);
}
