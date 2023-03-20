function stockProfitBrute(stocks: number[]): number {
  //   const minPriceIdx = stocks.indexOf(Math.min(...stocks));
  //   if (minPriceIdx === stocks.length - 1) return 0;
  //   const minPrice = stocks[minPriceIdx];
  //   const maxPrice = Math.max(...stocks.slice(minPriceIdx));
  //   if (maxPrice > minPrice) return maxPrice - minPrice;
  //   return 0;

  let maxProfit = 0;
  for (let i = 0; i < stocks.length - 1; i++) {
    for (let j = i + 1; j < stocks.length; j++) {
      const profit = stocks[j] - stocks[i];
      if (profit >= 0 && profit > maxProfit) maxProfit = profit;
    }
  }

  return maxProfit;
}

function greedyStockProfit(stocks: number[]): number {
  if (stocks.length === 1) return 0;
  let maxProfit = 0;
  let minPrice = stocks[0];
  for (let i = 0; i < stocks.length; i++) {
    minPrice = Math.min(stocks[i], minPrice);
    const currProfit = stocks[i + 1] - minPrice;
    if (currProfit > 0) {
      maxProfit = Math.max(currProfit, maxProfit);
    }
  }

  return maxProfit;
}

console.log(greedyStockProfit([7, 1, 5, 3, 6, 4]));
// 7, 1, 5, 3, 6, 4;
