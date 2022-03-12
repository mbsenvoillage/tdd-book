import Portfolio from "./portfolio.js";
import Money from "./money.js";
import { strict as assert } from "assert";

class MoneyTest {
  testMultiplication() {
    let tenEuros = new Money(10, "EUR"),
      twentyEuros = new Money(20, "EUR");
    assert.deepStrictEqual(tenEuros.times(2), twentyEuros);
  }
  testDivision() {
    let originalMoney = new Money(4002, "KRW"),
      actualMoneyAfterdivision = originalMoney.divide(4),
      expectedMoneyAfterDivision = new Money(1000.5, "KRW");
    assert.deepStrictEqual(
      actualMoneyAfterdivision,
      expectedMoneyAfterDivision
    );
  }
  testAddition() {
    let fiver = new Money(5, "USD"),
      tenner = new Money(10, "USD");
    let fifteenDollars = new Money(15, "USD"),
      portfolio = new Portfolio();
    portfolio.add(fiver, tenner);
    assert.deepStrictEqual(portfolio.evaluate("USD"), fifteenDollars);
  }

  getAllTestMethods() {
    let moneyProtoType = MoneyTest.prototype;
    let allProps = Object.getOwnPropertyNames(moneyProtoType);
    let testMethods = allProps.filter((p) => {
      return typeof moneyProtoType[p] === "function" && p.startsWith("test");
    });
    return testMethods;
  }

  testAdditionOfDollarsAndEuros() {
    let fiveDollars = new Money(5, "USD");
    let tenEuros = new Money(10, "EUR");
    let portfolio = new Portfolio();
    portfolio.add(fiveDollars, tenEuros);
    let expectedValue = new Money(17, "USD");
    assert.deepStrictEqual(portfolio.evaluate("USD"), expectedValue);
  }

  runAllTest() {
    let testMethods = this.getAllTestMethods();
    testMethods.forEach((m) => {
      console.log("Running: %s()", m);
      let method = Reflect.get(this, m);
      try {
        Reflect.apply(method, this, []);
      } catch (e) {
        if (e instanceof assert.AssertionError) {
          console.log(e);
        } else {
          throw e;
        }
      }
    });
  }
}

new MoneyTest().runAllTest();
