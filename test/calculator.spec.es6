import {Calculator} from '../src/calculator.js';

describe('Calculator', function () {
  var calculator;

  beforeEach(function () {
    calculator = new Calculator();
  });

  it('should add', function () {
    expect(calculator.add(2, 2)).to.equal(4);
  });

  it('should subtract', function () {
    expect(calculator.subtract(2, 1)).to.equal(1);
  });
});