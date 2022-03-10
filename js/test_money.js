const assert = require("assert");

class Money {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  times(multiplier) {
    return new Money(this.amount * multiplier, this.currency);
  }

  divide(divisor) {
    return new Money(this.amount / divisor, this.currency);
  }
}

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

let fiver = new Money(5, "USD"),
  tenner = new Money(10, "USD");

assert.deepStrictEqual(fiver.times(2), tenner);

let tenEuros = new Money(10, "EUR"),
  twentyEuros = new Money(20, "EUR");

assert.deepStrictEqual(tenEuros.times(2), twentyEuros);

let originalMoney = new Money(4002, "KRW"),
  actualMoneyAfterdivision = originalMoney.divide(4),
  expectedMoneyAfterDivision = new Money(1000.5, "KRW");

assert.deepStrictEqual(actualMoneyAfterdivision, expectedMoneyAfterDivision);

let fifteenDollars = new Money(15, "USD"),
  portfolio = new Portfolio();
portfolio.add(fiver, tenner);
assert.deepStrictEqual(portfolio.evaluate("USD"), fifteenDollars);
