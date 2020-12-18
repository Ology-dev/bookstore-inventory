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

function PRICE_IN_EURO(fixerAccessKey, price) {
  const baseURL = "http://api.currencylayer.com/live?";
  const queryParams = [
    { key: "access_key", value: fixerAccessKey},
    { key: "from", value: "USD"},
    { key: "to", value: "EUR"},
    { key: "amount", value: price.toString()},
  ];
  const queryString = queryParams.map(p => p.key + "=" + p.value).join("&");
  const response = UrlFetchApp.fetch(baseURL + queryString);
  const data = JSON.parse(response.getContentText());
  return price * data.quotes.USDEUR;
}
