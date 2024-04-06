const chai = require("chai");
global.expect = chai.expect;
const jsdom = require("mocha-jsdom");

async function setup() {
  await jsdom({});
}

module.exports = setup;
