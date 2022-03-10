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
