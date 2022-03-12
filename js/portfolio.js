import Money from "./money.js";

class Portfolio {
  constructor() {
    this.moneys = [];
  }
  add() {
    this.moneys = this.moneys.concat(Array.prototype.slice.call(arguments));
  }

  convert(money, currency) {
    let eurToUsd = 1.2;
    if (money.currency === currency) {
      return money.amount;
    }
    return money.amount * eurToUsd;
  }

  evaluate(currency) {
    let total = this.moneys.reduce((sum, money) => {
      return sum + this.convert(money, currency);
    }, 0);
    return new Money(total, currency);
  }
}

export default Portfolio;
