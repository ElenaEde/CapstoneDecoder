const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it("returns false if the shift value is equal to 0, less than -25, greater than 25, or not present", () => {
    // zero shift value
    expect(caesar("Hello, World!", 0)).to.be.false;

    // shift value less than -25
    expect(caesar("Hello, World!", -30)).to.be.false;

    // shift value greater than 25
    expect(caesar("Hello, World!", 30)).to.be.false;

    // no shift value present
    expect(caesar("Hello, World!")).to.be.false;
  });

  it("ignores capital letters", () => {
    const input = "A Message";
    const shift = 3;
    const encode = true;
    const expected = "d phvvdjh";
    const actual = caesar(input, shift, encode);
    expect(actual).to.equal(expected);
  });

  it("handles shifts that go past the end of the alphabet", () => {
    const input = "Zebra Magazine";
    const shift = 3;
    const encode = true;
    const expected = "cheud pdjdclqh";
    const actual = caesar(input, shift, encode);
    expect(actual).to.equal(expected);
  });

  it("maintains spaces and other nonalphabetic symbols", () => {
    const input = "Hello, World!";
    const shift = 3;
    const encode = true;
    const expected = "khoor, zruog!";
    const actual = caesar(input, shift, encode);
    expect(actual).to.equal(expected);
  });

  it("decodes the message if encode is false", () => {
    const input = "khoor, zruog!";
    const shift = 3;
    const encode = false;
    const expected = "hello, world!";
    const actual = caesar(input, shift, encode);
    expect(actual).to.equal(expected);
  });
});
