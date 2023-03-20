function stockProfitBrute(stocks: number[]): number {
  //   const minPriceIdx = stocks.indexOf(Math.min(...stocks));
  //   if (minPriceIdx === stocks.length - 1) return 0;
  //   const minPrice = stocks[minPriceIdx];
  //   const maxPrice = Math.max(...stocks.slice(minPriceIdx));
  //   if (maxPrice > minPrice) return maxPrice - minPrice;
  //   return 0;

  let maxProfit = -Infinity;
  for (let i = 0; i < stocks.length - 1; i++) {
    for (let j = i + 1; j < stocks.length; j++) {
      const profit = stocks[j] - stocks[i];
      if (profit >= 0 && profit > maxProfit) maxProfit = profit;
    }
  }

  return maxProfit === -Infinity ? 0 : maxProfit;
}

console.log(stockProfitBrute([7, 1, 5, 3, 6, 4]));
