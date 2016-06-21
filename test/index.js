'use strict';

var showCase = require('../src/index');
var assert = require('assert');
describe("test", function(){
  it("print src/index.js", function(){
     assert(showCase.hello == 'hello');
      console.log(showCase.hello);
  });
});