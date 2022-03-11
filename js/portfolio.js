import Money from "./money.js";

class Portfolio {
  constructor() {
    this.moneys = [];
  }
  add() {
    this.moneys = this.moneys.concat(Array.prototype.slice.call(arguments));
  }

  evaluate(currency) {
    let total = this.moneys.reduce((sum, money) => {
      return sum + money.amount;
    }, 0);
    return new Money(total, currency);
  }
}

export default Portfolio;
