const num1 = 31;
const num2 = 2;
const multiply = num1 * num2;

console.log(multiply); 

function generateRandomInteger() {
    return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;
  }
  
  const random = generateRandomInteger();
  
  const chai = require('chai');
const expect = chai.expect;

describe('calculateMod', function() {
  it('should calculate the modulus correctly', function() {
    const num3 = 18;
    const num4 = 7;
    const mod = num3 % num4;

    expect(num3).to.be.a('number');
    expect(num4).to.be.a('number');
    expect(mod).to.eq(4);
  });
});

  
  