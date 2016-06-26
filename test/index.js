'use strict';
import Index from '../src/index';
var assert = require('assert');
describe("test", function(){
  it("print src/index.js", function(){
     assert(typeof Index.defaultProps == 'object');
  });
});